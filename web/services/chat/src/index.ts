import express, { Application } from "express";
import dotenv from "dotenv";
import * as env from "./utils/env";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { createServer } from "http";
import { Server } from "socket.io";
import { classifyAndRespond } from "./lib/openai";
import { AuthenticatedSocket, authenticateSocket } from "./utils/auth/socket";

dotenv.config();

const app: Application = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
    },
});

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(cookieParser());

io.use(authenticateSocket);

io.on("connection", async (socket) => {
    const { chatId, user, token } = socket as AuthenticatedSocket;

    if (chatId && user) {
        socket.join(chatId);
        console.log(`User ${user.username} connected to room ${chatId}`);
    } else {
        socket.disconnect();
        return;
    }

    socket.on("chatMessage", async (message: string) => {
        if (!user) {
            socket.emit("error", "User not authenticated");
            return;
        }

        try {
            const createdMessage = await fetch(`http://localhost:3000/api/v1/chat/${chatId}/message`, {
                method: 'POST',
                credentials: "include",
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                 },
                body: JSON.stringify({
                    message: message,
                    userId: Number(user.id),
                    chatId: Number(chatId)
                })
            }).then(res => res.json());

            const chat = await fetch(`http://localhost:3000/api/v1/chat/${chatId}`, {
                method: 'GET',
                credentials: "include",
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                 },            }).then(res => res.json());

            io.to(chatId).emit("chatMessage", JSON.stringify({ ...createdMessage, user: user }));

            const gptResponse = await classifyAndRespond(message, chat?.chatMessages.map((chatMessage: any) => ({
                role: chatMessage.userId == user.id ? "user" : "assistant",
                content: chatMessage.message
            })) || []);

            const createdAutomatedMessage = await fetch(`http://localhost:3000/api/v1/chat/${chatId}/message`, {
                method: 'POST',
                credentials: "include",
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                 },                body: JSON.stringify({
                    message: gptResponse.userReply,
                    userId: 101,
                    chatId: Number(chatId)
                })
            }).then(res => res.json());

            io.to(chatId).emit("chatMessage", JSON.stringify({
                message: createdAutomatedMessage.message,
                user: {
                    username: "GPT Gerrie",
                    id: 101,
                }
            }));

            if(gptResponse.prediction){
                io.to(chatId).emit("action", JSON.stringify({
                    action: "accept",
                    options: ["Request", "Decline"],
                    data: {
                        serviceName: gptResponse.serviceName,
                        urgency: gptResponse.urgency
                    }
                }));
            }
        } catch (error) {
            console.error("Error with GPT model:", error);
            socket.emit("error", "Failed to process your message.");
        }
    });

    socket.on("action", async (payload: string) => {
        let payloadJson: {
            action: string,
            data: any
        } = JSON.parse(payload)

        if (!user) {
            socket.emit("error", "User not authenticated");
            return;
        }


        try {
            let actions: { [key: string]: () => Promise<void> } = {
                confirmCreateRequest: async () => {
                    const jobRequest = await fetch(`http://localhost:3000/api/v1/chat/${chatId}/job`, {
                        method: 'POST',
                        credentials: "include",
                        headers: { 
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                         },                        body: JSON.stringify({
                            userId: user.id,
                            chatId: Number(chatId),
                            serviceName: payloadJson.data.serviceName,
                            urgency: payloadJson.data.urgency,
                            description: "",
                        })
                    }).then(res => res.json());

                    socket.emit("requestCreated", JSON.stringify(jobRequest));
                },
                declineCreateRequest: async () => {
                    socket.emit("action", null);
                },
            };
        
            let action = actions[payloadJson.action];
            await action();
        } catch (error) {
            console.error("Error with GPT model:", error);
            socket.emit("error", "Failed to process your message.");
        }        
    });


    socket.on("disconnect", () => {
        console.log(`User ${user.username} disconnected from room ${chatId}`);
    });
});


httpServer.listen(env.PORT, () => {
    console.log(`Server listening at http://localhost:${env.PORT}`);
});
