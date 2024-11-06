import { authenticateRequest } from "@/presenter/actions/auth-actions";
import { prisma } from "@/repository/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const authUser = await authenticateRequest(req);
    if (!authUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        const services = await prisma.service.findMany();
        return NextResponse.json(services);
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Failed to retrieve chat" }, { status: 500 });
    }
}
