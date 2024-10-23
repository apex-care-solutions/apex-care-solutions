import { JobStatus } from "../model/job-status";
import { IRepository } from "./repository";

export interface IJobStatusRepository extends IRepository<JobStatus> {
    findByJobId(jobId: string): Promise<JobStatus[]>;
}
