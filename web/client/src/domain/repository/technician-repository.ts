import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { TechnicianRoute } from "../data/services/apex-care-api/routes/technician-routes";
import { Technician } from "../model/technician";
import { IRepository } from "./repository";

export class TechnicianRepository implements IRepository<Technician> {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<Technician[]> {
        return await this.apexCareApi.request<TechnicianRoute>(
            "GET /technicians",
        );
    }

    async findById(id: string): Promise<Technician | null> {
        try {
            return await this.apexCareApi.request<TechnicianRoute>(
                "GET /technicians/:id",
                { id },
            );
        } catch {
            return null;
        }
    }

    async create(entity: Technician): Promise<Technician> {
        return await this.apexCareApi.request<TechnicianRoute>(
            "POST /technicians",
            undefined,
            undefined,
            entity,
        );
    }

    async update(
        id: string,
        entity: Partial<Technician>,
    ): Promise<Technician | null> {
        try {
            return await this.apexCareApi.request<TechnicianRoute>(
                "PUT /technicians/:id",
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
            await this.apexCareApi.request<TechnicianRoute>(
                "DELETE /technicians/:id",
                { id },
            );
            return true;
        } catch {
            return false;
        }
    }
}
