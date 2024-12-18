"use server";
import { createResponse } from "../../utils/api";
import { prisma } from "@/repository/database";
import { getUserIdFromToken } from "./auth-actions";
import { APIResponse } from "@/domain/api/api-response";
import { ChatMessage } from "@prisma/client";

export async function createChat() {
    "use server";
    const userId = await getUserIdFromToken();
    if (!userId) return createResponse({status: "UNAUTHORIZED", error: "Unauthorized"});

    try {
        const chat = await prisma.chat.create({});
        await prisma.chatParticipant.create({
            data: { chatId: chat.id, userId },
        });
        return createResponse({status: "OK", data: chat});
    } catch (e) {
        console.error(e);
        return createResponse({status:"INTERNAL_SERVER_ERROR", error: String(e)});
    }
}

export async function getChats() {
    "use server";
    const userId = await getUserIdFromToken();
    if (!userId) return createResponse({status: "UNAUTHORIZED", error: "Unauthorized"});

    try {
        const chats = await prisma.chat.findMany({
            where: { chatParticipants: { some: { userId } } },
        });
        return createResponse({status: "OK", data: chats});
    } catch (e) {
        console.error(e);
        return createResponse({status:"INTERNAL_SERVER_ERROR", error: String(e)});
    }
}

export async function getChatMessages(chatId: number) {
    "use server";
    try {
        const messages = await prisma.chatMessage.findMany({ where: { chatId }, include: {
            user: true
        } });
        return createResponse({status: "OK", data: messages});
    } catch (e) {
        console.error(e);
        return createResponse({status:"INTERNAL_SERVER_ERROR", error: String(e)});
    }
}

export async function createChatMessage(chatId: number, message: string): Promise<APIResponse<ChatMessage | undefined>> {
    "use server";
    const userId = await getUserIdFromToken();
    if (!userId) return createResponse({status: "UNAUTHORIZED", error: "Unauthorized"}) as APIResponse<undefined>;

    try {
        const chatMessage = await prisma.chatMessage.create({
            data: { message, chatId, userId },
        });
        return createResponse({status: "OK", data: chatMessage}) as APIResponse<ChatMessage>;
    } catch (e) {
        console.error(e);
        return createResponse({status:"INTERNAL_SERVER_ERROR", error: String(e)}) as APIResponse<undefined>;
    }
}

export async function getChat(chatId: number) {
    "use server";
    try {
        const chat = await prisma.chat.findFirst({ where: { id: chatId } });
        return chat
            ? createResponse({status: "OK", data: chat})
            : createResponse({status: "NOT_FOUND",error: "Chat not found"});
    } catch (e) {
        console.error(e);
        return createResponse({status:"INTERNAL_SERVER_ERROR", error: String(e)});
    }
}
