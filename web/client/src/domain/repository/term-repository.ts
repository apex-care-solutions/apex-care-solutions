import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { Term } from "../model/term";
import { IRepository } from "./repository";

export class TermRepository implements IRepository<Term> {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<Term[]> {
        return await this.apexCareApi.request<TermRoute>("GET /terms");
    }

    async findById(id: string): Promise<Term | null> {
        try {
            return await this.apexCareApi.request<TermRoute>("GET /terms/:id", {
                id,
            });
        } catch {
            return null;
        }
    }

    async create(entity: Term): Promise<Term> {
        return await this.apexCareApi.request<TermRoute>(
            "POST /terms",
            undefined,
            undefined,
            entity,
        );
    }

    async update(id: string, entity: Partial<Term>): Promise<Term | null> {
        try {
            return await this.apexCareApi.request<TermRoute>(
                "PUT /terms/:id",
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
            await this.apexCareApi.request<TermRoute>("DELETE /terms/:id", {
                id,
            });
            return true;
        } catch {
            return false;
        }
    }
}
