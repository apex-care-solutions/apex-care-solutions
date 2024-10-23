import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { SkillRoute } from "../data/services/apex-care-api/routes/skill-route";
import { Skill } from "../model/skill";
import { IRepository } from "./repository";

export class SkillRepository implements IRepository<Skill> {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<Skill[]> {
        return await this.apexCareApi.request<SkillRoute>("GET /skills");
    }

    async findById(id: string): Promise<Skill | null> {
        try {
            return await this.apexCareApi.request<SkillRoute>(
                "GET /skills/:id",
                { id },
            );
        } catch {
            return null;
        }
    }

    async create(entity: Skill): Promise<Skill> {
        return await this.apexCareApi.request<SkillRoute>(
            "POST /skills",
            undefined,
            undefined,
            entity,
        );
    }

    async update(id: string, entity: Partial<Skill>): Promise<Skill | null> {
        try {
            return await this.apexCareApi.request<SkillRoute>(
                "PUT /skills/:id",
                { id },
                undefined,
                entity,
            );
        } catch {
            return null;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await this.apexCareApi.request<SkillRoute>("DELETE /skills/:id", {
                id,
            });
            return true;
        } catch {
            return false;
        }
    }
}
