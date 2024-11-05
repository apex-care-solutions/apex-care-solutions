import { Job } from "@/domain/models/job";
import { IRepository } from "./repository";
import { prisma } from ".";

export class JobRepository implements IRepository<Job> {
    constructor() {}

    async findAll(): Promise<Job[]> {
        return await prisma.job.findMany();
    }

    async findById(id: string): Promise<Job | null> {
        return await prisma.job.findUnique({
            where: { id: Number(id) },
        });
    }

    async create(entity: Job): Promise<Job> {
        return await prisma.job.create({
            data: entity,
        });
    }

    async update(id: string, entity: Partial<Job>): Promise<Job | null> {
        try {
            return await prisma.job.update({
                where: { id: Number(id) },
                data: entity,
            });
        } catch (error) {
            console.error("Update job error:", error);
            return null;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await prisma.job.delete({
                where: { id: Number(id) },
            });
            return true;
        } catch (error) {
            console.error("Delete job error:", error);
            return false;
        }
    }
}
