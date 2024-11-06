import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { JWT_SECRET } from "../../utils/env";
import { createResponse } from "../../utils/api";
import { prisma } from "@/repository/database";

async function getUserIdFromToken(): Promise<number | null> {
    const nextCookies = await cookies();
    const token = nextCookies.get("token")?.value;
    if (!token) return null;

    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        return (payload as { id: number }).id;
    } catch {
        return null;
    }
}

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

export async function createChatMessage(chatId: number, message: string) {
    "use server";
    const userId = await getUserIdFromToken();
    if (!userId) return createResponse({status: "UNAUTHORIZED", error: "Unauthorized"});

    try {
        const chatMessage = await prisma.chatMessage.create({
            data: { message, chatId, userId },
        });
        return createResponse({status: "OK", data: chatMessage});
    } catch (e) {
        console.error(e);
        return createResponse({status:"INTERNAL_SERVER_ERROR", error: String(e)});
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
