import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import { AuthenticatedSocket } from "./utils/middleware/authMiddleware";
import { ALLOWED_ORIGIN, HOST, PORT } from "./utils/env";
import { SocketServer } from "./lib/socket/socket-server";
import { ActionHandler } from "./domain/controllers/action/action-controller";
import { ChatMessageHandler } from "./domain/controllers/chat-message/chat-message-controller";

dotenv.config();

const app: Application = express();
const socketServer = new SocketServer(app)

app.use(cors({
    origin: ALLOWED_ORIGIN,
    credentials: true,
}));

app.use(cookieParser());

socketServer.initialize();

socketServer.httpServer.listen(PORT, HOST, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
