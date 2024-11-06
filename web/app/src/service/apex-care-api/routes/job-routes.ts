import { API } from "@/domain/api/api";
import { Job } from "@/domain/models/job";
import { JobStatus } from "@/domain/models/job-status";

export const jobRoutes = {
    "GET /jobs": (url: string, query: { take: number; page: number }) =>
        API.route<Job[]>({
            url,
            method: "GET",
            route: `/jobs`,
            query,
        }),
    "GET /jobs/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/jobs/${id}`,
        }),
    "POST /jobs": (url: string) =>
        API.route<Job[]>({
            url,
            method: "POST",
            route: `/jobs`,
        }),
    "PUT /jobs/:id": (url: string, { id }: { id: string }, body: Job) =>
        API.route<Job>({
            url,
            method: "PUT",
            route: `/jobs/${id}`,
            body: body,
        }),
    "DELETE /jobs/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/jobs/${id}`,
        }),
    "GET /jobs/status": (url: string) =>
        API.route<JobStatus[]>({
            url,
            method: "GET",
            route: `/jobs/status`,
        }),
} as const;

export type JobRoute = keyof typeof jobRoutes;
