import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { PackageRoute } from "../data/services/apex-care-api/routes/package-routes";
import { Package } from "../model/package";
import { IRepository } from "./repository";

export class PackageRepository implements IRepository<Package> {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<Package[]> {
        return await this.apexCareApi.request<PackageRoute>(
            "GET /packages/:id",
            
        );
    }

    async findById(id: string): Promise<Package | null> {
        try {
            return await this.apexCareApi.request<PackageRoute>(
                "GET /packages/:id",
                { id },
            );
        } catch {
            return null;
        }
    }

    async create(entity: Package): Promise<Package> {
        return await this.apexCareApi.request<PackageRoute>(
            "POST /packages",
            undefined,
            undefined,
            entity,
        );
    }

    async update(
        id: string,
        entity: Partial<Package>,
    ): Promise<Package | null> {
        try {
            return await this.apexCareApi.request<PackageRoute>(
                "PUT /packages/:id",
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
            await this.apexCareApi.request<PackageRoute>(
                "DELETE /packages/:id",
                { id },
            );
            return true;
        } catch {
            return false;
        }
    }
}
