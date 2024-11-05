import { Server, Socket } from "socket.io";
import { AuthenticatedSocket } from "../utils/middleware/authMiddleware";

export function chatMessageHandler(io: Server, socket: AuthenticatedSocket, token: string) {
    return async (message: string) => {
        const { chatId, user } = socket;

        if (!chatId) {
            socket.emit("error", "User not connected to a room");
            return;
        }

        if (!user) {
            socket.emit("error", "User not authenticated");
            return;
        }

        try {
            // Your message handling logic here, as you have it
            // Send response back to room
            io.to(chatId).emit("chatMessage", JSON.stringify({ message, user }));
        } catch (error) {
            console.error("Error processing message:", error);
            socket.emit("error", "Failed to process your message.");
        }
    };
}
