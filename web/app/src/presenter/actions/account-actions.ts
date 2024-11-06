"use server";
import { prisma } from "@/repository/database";
import { User } from "@prisma/client";
import { setUserToken } from "./auth-actions";

export async function getUserById(id: string): Promise<User | null> {
    try {
        return await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
        });
    } catch (error) {
        throw new Error('User not found');
    }
}

export async function updateUserById(id: string, data: Partial<User>): Promise<Partial<User> | null> {
    try {
        let user = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: data,
        });
        let {password: _, ...secureUser} = user;
        await setUserToken(secureUser);
        return secureUser;
    } catch (error) {
        throw new Error('Error updating user');
    }
}
