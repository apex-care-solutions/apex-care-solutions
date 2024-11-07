"use server";

import { createResponse } from "@/utils/api";
import { getAuthUser, getUserIdFromToken, setUserToken } from "./auth-actions";
import { APIResponse } from "@/domain/api/api-response";
import { prisma } from "@/repository/database";
import { Technician } from "@prisma/client";

export async function registerTechnicianMe(services: string[]) {
    try {
        const userId = await getUserIdFromToken();
        if (!userId) return createResponse({ status: "UNAUTHORIZED", error: "Not authenticated" }) as APIResponse<undefined>;

        const [technician, user] = await prisma.$transaction([
            prisma.technician.create({
                data: {
                    userId,
                    technicianServices: {
                        createMany: {
                            data: services.map((service) => ({ serviceName: service })),
                        },
                    },
                },
            }),
            prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    userType: "TECHNICIAN",
                },
            }),
        ]);

        const {password: _, ...secureUser} = user;

        await setUserToken(secureUser)

        return createResponse<Technician>({ status: "OK", data: technician, redirect: "/" }) as APIResponse<Technician>;
    } catch (error) {
        return createResponse({ status: "INTERNAL_SERVER_ERROR", error: error as string }) as APIResponse<undefined>;
    }
}

export async function getAuthUserTechnician(){
    const {data: user} = await getAuthUser();
    const technician = await prisma.technician.findFirst({
        where: {
            userId: user?.id
        },
        include: {
            technicianServices: true
        }
    })
}