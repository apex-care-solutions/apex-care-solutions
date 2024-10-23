export class Job {
    jobId: string;
    title: string;
    description: string;
    status: string;
    technicianId: string;

    constructor(
        jobId: string,
        title: string,
        description: string,
        status: string,
        technicianId: string,
    ) {
        this.jobId = jobId;
        this.title = title;
        this.description = description;
        this.status = status;
        this.technicianId = technicianId;
    }
}
