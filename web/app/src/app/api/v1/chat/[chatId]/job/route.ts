import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/repository/database';
import { authenticateRequest } from '@/presenter/actions/auth-actions';

export async function POST(req: NextRequest, { params }: { params: { chatId: string } }) {
    const authUser = await authenticateRequest(req);
    if (!authUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const chatId = Number(params.chatId);
    const { userId, serviceName, urgency, description } = await req.json();

    try {
        const jobRequest = await prisma.job.create({
            data: {
                userId: Number(userId),
                chatId,
                serviceName,
                urgency,
                description,
            },
        });

        return NextResponse.json(jobRequest);
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Failed to create job request" }, { status: 500 });
    }
}
