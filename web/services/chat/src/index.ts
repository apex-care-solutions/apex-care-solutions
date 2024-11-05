import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { createServer } from "http";
import { Server } from "socket.io";
import { AuthenticatedSocket, authenticateSocket } from "./utils/middleware/authMiddleware";
import { ALLOWED_ORIGIN, APEX_CARE_API_BASE_URL, PORT } from "./utils/env";
import { classifyAndRespond } from "./service/openai";
import { ApexCareApi } from "./service/apex-care/apex-care-api";
import { ChatRepository } from "./repository/apex-care/chat-repository";
import { ServiceRepository } from "./repository/apex-care/service-repository";

dotenv.config();

const app: Application = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ALLOWED_ORIGIN,
        methods: ['GET', 'POST'],
        credentials: true,
    },
});

app.use(cors({
    origin: ALLOWED_ORIGIN,
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
        const apexCareApi = new ApexCareApi(APEX_CARE_API_BASE_URL, { 'Authorization': `Bearer ${token}` })
        const chatRepository = new ChatRepository(apexCareApi);
        const serviceRepository = new ServiceRepository(apexCareApi)

        if (!user) {
            socket.emit("error", "User not authenticated");
            return;
        }

        try {
            const createdMessageResponse = await chatRepository.createChatMessage(chatId, user.id, message)
            const chatResponse = await chatRepository.findById(chatId);

            let createdMessage = createdMessageResponse.data;
            let chat = chatResponse.data;


            io.to(chatId).emit("chatMessage", JSON.stringify({ ...createdMessage, user: user }));

            const gptResponse = await classifyAndRespond(message, chat?.chatMessages.map((chatMessage: any) => ({
                role: chatMessage.userId == user.id ? "user" : "assistant",
                content: chatMessage.message
            })) || []);

            chatRepository.createChatMessage(chatId, 101, message);

            const createdAutomatedMessage = await chatRepository.createChatMessage(chatId, 101, message);

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
        const apexCareApi = new ApexCareApi(APEX_CARE_API_BASE_URL, { 'Authorization': `Bearer ${token}` })
        const chatRepository = new ChatRepository(apexCareApi);

        let payloadJson: {
            action: string,
            data: any
        } = JSON.parse(payload)

        if (!user) {
            socket.emit("error", "User not authenticated");
            return;
        }


        try {
            chatRepository.createJobForChat(chatId, {
                userId: user.id,
                chatId: Number(chatId),
                serviceName: payloadJson.data.serviceName,
                urgency: payloadJson.data.urgency,
                description: "",
            })
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


httpServer.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
