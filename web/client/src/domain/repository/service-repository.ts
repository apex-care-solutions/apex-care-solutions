import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { ServiceRoute } from "../data/services/apex-care-api/routes/service-routes";
import { Service } from "../model/service";
import { IRepository } from "./repository";

export class ServiceRepository implements IRepository<Service> {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<Service[]> {
        return await this.apexCareApi.request<ServiceRoute>(
            "GET /services",
        );
    }

    async findById(id: string): Promise<Service | null> {
        try {
            return await this.apexCareApi.request<ServiceRoute>(
                "GET /services/:id",
                { id },
            );
        } catch {
            return null;
        }
    }

    async create(entity: Service): Promise<Service> {
        return await this.apexCareApi.request<ServiceRoute>(
            "POST /services",
            undefined,
            undefined,
            entity,
        );
    }

    async update(
        id: string,
        entity: Partial<Service>,
    ): Promise<Service | null> {
        try {
            return await this.apexCareApi.request<ServiceRoute>(
                "PUT /services/:id",
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
            await this.apexCareApi.request<ServiceRoute>(
                "DELETE /services/:id",
                { id },
            );
            return true;
        } catch {
            return false;
        }
    }
}
