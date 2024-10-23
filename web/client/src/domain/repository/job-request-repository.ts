import { JobRequest } from "../model/job-request";
import { IRepository } from "./repository";

export interface IJobRequestRepository extends IRepository<JobRequest> {
    findByClientId(userId: string): Promise<JobRequest[]>;
    findByPriority(priority: string): Promise<JobRequest[]>;
}
