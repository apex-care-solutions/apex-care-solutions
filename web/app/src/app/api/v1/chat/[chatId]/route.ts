import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/repository/database';
import { authenticateRequest } from '@/presenter/actions/auth-actions';

export async function GET(req: NextRequest, { params }: { params: { chatId: string } }) {
    const authUser = await authenticateRequest(req);
    if (!authUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { chatId } = await params;
    try {
        const chat = await prisma.chat.findUnique({
            where: { id: Number(chatId) },
            include: { chatMessages: true, chatParticipants: true },
        });
        return NextResponse.json(chat);
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Failed to retrieve chat" }, { status: 500 });
    }
}
