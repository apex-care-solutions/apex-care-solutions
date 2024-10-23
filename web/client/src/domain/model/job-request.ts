import { Job } from "./job";

export interface JobRequest {
    jobRequestId: string;
    type: string;
    service: string;
    location: string;
    priority: string;
    clientId: string;
    jobs?: Job[];
}
