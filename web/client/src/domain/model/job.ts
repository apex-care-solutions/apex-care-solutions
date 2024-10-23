import { JobStatus } from "./job-status";
import { Review } from "./review";

export interface Job {
    jobId: string;
    requestId: string;
    technicianId: string;
    review?: Review;
    statuses?: JobStatus[];
}
