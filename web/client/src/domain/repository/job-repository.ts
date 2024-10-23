import { Job } from "../model/job";
import { IRepository } from "./repository";

export interface IJobRepository extends IRepository<Job> {
    findByTechnicianId(technicianId: string): Promise<Job[]>;
    findByRequestId(requestId: string): Promise<Job[]>;
}
