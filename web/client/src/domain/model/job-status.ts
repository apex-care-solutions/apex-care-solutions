export class JobStatus {
    jobStatusId: string;
    key: string;
    message: string;
    status: string;
    timestamp: Date;
    jobId: string;

    constructor(
        jobStatusId: string,
        key: string,
        message: string,
        status: string,
        timestamp: Date,
        jobId: string,
    ) {
        this.jobStatusId = jobStatusId;
        this.key = key;
        this.message = message;
        this.status = status;
        this.timestamp = timestamp;
        this.jobId = jobId;
    }
}
