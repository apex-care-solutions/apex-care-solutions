import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { JobRequestRoute } from "../data/services/apex-care-api/routes/job-request-routes";
import { JobRequest } from "../model/job-request";
import { IRepository } from "./repository";

export class JobRequestRepository implements IRepository<JobRequest> {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<JobRequest[]> {
        return await this.apexCareApi.request<JobRequestRoute>("GET /requests");
    }

    async findById(id: string): Promise<JobRequest | null> {
        try {
            return await this.apexCareApi.request<JobRequestRoute>(
                "GET /requests/:id",
                { id },
            );
        } catch {
            return null;
        }
    }

    async create(entity: JobRequest): Promise<JobRequest> {
        return await this.apexCareApi.request<JobRequestRoute>(
            "POST /requests",
            undefined,
            undefined,
            entity,
        );
    }

    async update(
        id: string,
        entity: Partial<JobRequest>,
    ): Promise<JobRequest | null> {
        try {
            return await this.apexCareApi.request<JobRequestRoute>(
                "PUT /requests/:id",
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
            await this.apexCareApi.request<JobRequestRoute>(
                "DELETE /requests/:id",
                { id },
            );
            return true;
        } catch {
            return false;
        }
    }
}
