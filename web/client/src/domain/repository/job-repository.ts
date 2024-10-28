import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { Job } from "../model/job";
import { IRepository } from "./repository";

export class JobRepository implements IRepository<Job> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<Job[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Job | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Job): Promise<Job> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<Job>): Promise<Job | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
