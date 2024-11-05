import { Job } from "./job";

export class JobRequest {
    jobRequestId: string;
    type: string;
    service: string;
    location: string;
    priority: string;
    clientId: string;
    jobs?: Job[];

    constructor(
        jobRequestId: string,
        type: string,
        service: string,
        location: string,
        priority: string,
        clientId: string,
        jobs?: Job[],
    ) {
        this.jobRequestId = jobRequestId;
        this.type = type;
        this.service = service;
        this.location = location;
        this.priority = priority;
        this.clientId = clientId;
        this.jobs = jobs;
    }
}
