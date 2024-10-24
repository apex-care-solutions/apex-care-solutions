import { API } from "../../api";
import { ApiBaseRouteCollection } from "../../api-route";
import { JobRequest } from "@/domain/model/job-request";

export const jobRequestRoutes = {
    "GET /job-requests": (url: string, query: { take: number; page: number }) =>
        API.route({
            url,
            method: "GET",
            route: `/job-requests`,
            query,
        }),
    "GET /job-requests/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/job-requests/${id}`,
        }),
    "POST /job-requests": (url: string) =>
        API.route<JobRequest[]>({
            url,
            method: "POST",
            route: `/job-requests`,
        }),
    "PUT /job-requests/:id": (
        url: string,
        { id }: { id: string },
        body: JobRequest,
    ) =>
        API.route<JobRequest>({
            url,
            method: "PUT",
            route: `/job-requests/${id}`,
            body: body,
        }),
    "DELETE /job-requests/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/job-requests/${id}`,
        }),
} as const satisfies ApiBaseRouteCollection<"job-requests">;

export type jobRequestRoute = keyof typeof jobRequestRoutes;
