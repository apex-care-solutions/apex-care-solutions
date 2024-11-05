export type { Job } from "@prisma/client";

import { Chat, Job, ChatMessage, User, Service, JobStatusUpdate } from ".";
export type JobDetails = Job & {
    chat: Chat & { chatMessages: (ChatMessage & { user: User })[] };
    jobStatusUpdates: JobStatusUpdate[];
    service: Service;
}