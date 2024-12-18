import { authenticateRequest } from '@/presenter/actions/auth-actions';
import { prisma } from '@/repository/database';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, { params }: { params: Promise<{ chatId: string }> }) {
    const authUser = await authenticateRequest(req);
    if (!authUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    
    const { chatId } = await params;
    const { message, userId } = await req.json();

    try {
        const createdMessage = await prisma.chatMessage.create({
            data: {
                message,
                userId: Number(userId),
                chatId: Number(chatId),
            },
            include: {
                user: true
            }
        });
        return NextResponse.json(createdMessage);
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Failed to create message" }, { status: 500 });
    }
}
