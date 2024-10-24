import { Job } from "@/domain/model/job";
import { API } from "../../api";
import { ApiBaseRouteCollection } from "../../api-route";

export const jobRoutes = {
    "GET /jobs": (url: string, query: { take: number; page: number }) =>
        API.route({
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
} as const satisfies ApiBaseRouteCollection<"jobs">;

export type JobRoute = keyof typeof jobRoutes;
