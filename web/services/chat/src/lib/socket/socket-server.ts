import { Application } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { ALLOWED_ORIGIN } from "../../utils/env";
import { AuthenticatedSocket, authenticateSocket } from "../../utils/middleware/authMiddleware";
import { ActionHandler } from "../../domain/controllers/action/action-controller";
import { ChatMessageHandler } from "../../domain/controllers/chat-message/chat-message-controller";

export class SocketServer extends Server{
    constructor(private app: Application){
        super(createServer(app), {
            cors: {
                origin: ALLOWED_ORIGIN,
                methods: ['GET', 'POST'],
                credentials: true,
            },
        })
    }

    initialize(){
        this.use(authenticateSocket);
        this.on("connection", async (socket) => {
            const actionHandler = new ActionHandler(this, socket)
            const messageHandler = new ChatMessageHandler(this, socket)

            const { chatId, user } = socket as AuthenticatedSocket;

            console.log(user?.username, "Connected")

            if (chatId && user) socket.join(chatId);
            else return socket.disconnect();

            socket.on("chatMessage", messageHandler.route);
            socket.on("action", actionHandler.route);

            socket.on("disconnect", () => {
                console.log(`User ${user.username} disconnected from room ${chatId}`);
            });
        });
    }
}