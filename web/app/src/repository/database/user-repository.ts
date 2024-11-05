import { User } from "@/domain/models/user";
import { IRepository } from "./repository";
import { prisma } from ".";

export class UserRepository implements IRepository<User> {
    constructor() {}

    async findAll(): Promise<User[]> {
        return await prisma.user.findMany();
    }

    async findById(id: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { id: Number(id) },
        });
    }

    async findByUsername(username: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { username },
        });
    }

    async create(entity: User): Promise<User> {
        return await prisma.user.create({
            data: entity,
        });
    }

    async update(id: string, entity: Partial<User>): Promise<User | null> {
        return await prisma.user.update({
            where: { id: Number(id) },
            data: entity,
        });
    }

    async delete(id: string): Promise<boolean> {
        try {
            await prisma.user.delete({
                where: { id: Number(id) },
            });
            return true;
        } catch (error) {
            console.error("Delete user error:", error);
            return false;
        }
    }
}
