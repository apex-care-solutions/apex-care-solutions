import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { JobRoute } from "../data/services/apex-care-api/routes/job-routes";
import { Job } from "../model/job";
import { IRepository } from "./repository";

export class JobRepository implements IRepository<Job> {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<Job[]> {
        return await this.apexCareApi.request<JobRoute>("GET /jobs");
    }

    async findById(id: string): Promise<Job | null> {
        try {
            return await this.apexCareApi.request<JobRoute>("GET /jobs/:id", {
                id,
            });
        } catch (error) {
            console.error(`Failed to find job with ID ${id}:`, error);
            return null;
        }
    }

    async create(entity: Job): Promise<Job> {
        return await this.apexCareApi.request<JobRoute>(
            "POST /jobs",
            undefined,
            undefined,
            entity,
        );
    }

    async update(id: string, entity: Partial<Job>): Promise<Job | null> {
        try {
            return await this.apexCareApi.request<JobRoute>(
                "PUT /jobs/:id",
                { id },
                undefined,
                entity,
            );
        } catch (error) {
            console.error(`Failed to update job with ID ${id}:`, error);
            return null;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await this.apexCareApi.request<JobRoute>("DELETE /jobs/:id", {
                id,
            });
            return true;
        } catch (error) {
            console.error(`Failed to delete job with ID ${id}:`, error);
            return false;
        }
    }

    async findByTechnicianId(technicianId: string): Promise<Job[]> {
        return await this.apexCareApi.request<JobRoute>(
            "GET /jobs/technician/:id",
            { id: technicianId },
        );
    }

    async findByRequestId(requestId: string): Promise<Job[]> {
        return await this.apexCareApi.request<JobRoute>(
            "GET /jobs/request/:id",
            { id: requestId },
        );
    }
}
