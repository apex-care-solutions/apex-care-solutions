import { Socket } from "socket.io";
import { JWT_SECRET } from "../env";
import jwt from 'jsonwebtoken';

export interface AuthenticatedSocket extends Socket {
    user?: {
        id: number;
        username: string;
        firstName: string;
        lastName: string;
        email: string;
    };
    chatId?: string;
    token?: string;
}

export function authenticateSocket(socket: AuthenticatedSocket, next: (err?: Error) => void) {
    try {
        const token = socket.handshake.headers.cookie
            ?.split('; ')
            .find((cookie) => cookie.startsWith("token="))
            ?.split("=")[1];

        socket.token = token
        const chatId = socket.handshake.query.chatId as string;

        if (!token || !chatId) {
            return next(new Error("Authentication and chatId required"));
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        socket.user = decoded as AuthenticatedSocket["user"];
        socket.chatId = chatId;

        next();
    } catch (error) {
        console.error("Error decoding token:", error);
        next(new Error("Invalid or expired token"));
    }
}