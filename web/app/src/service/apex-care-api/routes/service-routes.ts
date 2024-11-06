import { API } from "@/domain/api/api";
import { ApiBaseRouteCollection } from "@/domain/api/api-route";
import { Service } from "@/domain/models/service";

export const serviceRoutes = {
    "GET /services": (url: string, query: { take: number; page: number }) =>
        API.route({
            url,
            method: "GET",
            route: `/services`,
            query,
        }),
    "GET /services/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/services/${id}`,
        }),
    "POST /services": (url: string) =>
        API.route<Service[]>({
            url,
            method: "POST",
            route: `/services`,
        }),
    "PUT /services/:id": (url: string, { id }: { id: string }, body: Service) =>
        API.route<Service>({
            url,
            method: "PUT",
            route: `/services/${id}`,
            body: body,
        }),
    "DELETE /services/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/services/${id}`,
        }),
} as const satisfies ApiBaseRouteCollection<"services">;

export type ServiceRoute = keyof typeof serviceRoutes;
