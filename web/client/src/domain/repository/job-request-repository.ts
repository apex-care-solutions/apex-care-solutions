import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { JobRequest } from "../model/job-request";
import { IRepository } from "./repository";

export class JobRequestRepository implements IRepository<JobRequest> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<JobRequest[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<JobRequest | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: JobRequest): Promise<JobRequest> {
        throw new Error("Method not implemented.");
    }
    update(
        id: string,
        entity: Partial<JobRequest>,
    ): Promise<JobRequest | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
