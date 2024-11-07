export type { Job } from "@prisma/client";

import { Chat, Job, ChatMessage, User, Service, JobStatusUpdate, JobStatus } from ".";
export type JobDetails = Job & {
    chat: Chat & { chatMessages: (ChatMessage & { user: User })[] };
    jobStatusUpdates: (JobStatusUpdate & {jobStatus: JobStatus})[];
    service: Service;
}