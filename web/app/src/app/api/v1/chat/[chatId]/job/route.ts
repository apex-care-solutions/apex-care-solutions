import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/repository/database';
import { authenticateRequest } from '@/presenter/actions/auth-actions';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest, { params }: { params: { chatId: string } }) {
    const authUser = await authenticateRequest(req);
    if (!authUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { chatId } = await params;
    const { userId, serviceName, urgency, description } = await req.json();

    try {
        const jobRequest = await prisma.job.create({
            data: {
                userId: Number(userId),
                chatId: Number(chatId),
                serviceName,
                urgency,
                description,
                jobStatusUpdates: {
                    createMany: {
                         data : [
                            {jobStatusId: 1},
                            {jobStatusId: 2}
                         ]
                   }
                }
            },
        });

        

        const chat = await prisma.chat.update({
            where: {
                id: Number(chatId)
            },
            data: {
                active: false
            }
        })

        revalidatePath("/");

        return NextResponse.json(jobRequest);
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Failed to create job request" }, { status: 500 });
    }
}
