import { User } from ".";

export interface Chat {
    id: number;
    createdAt: Date;
    active: boolean;
}

export interface ChatParticipant {
    chatId: number;
    userId: number;
    chat: Chat;
    user: User;
}

export interface ChatMessage {
    id: number;
    userId: number;
    chatId: number;
    createdAt: Date;
    message: string;
    chat: Chat;
    user: User;
}