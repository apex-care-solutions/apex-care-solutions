import { API } from "@/domain/api/api";
import { ApiBaseRouteCollection } from "@/domain/api/api-route";
import { Technician } from "@/domain/models/technician";


export const technicianRoutes = {
    "GET /technicians": (url: string, query: { take: number; page: number }) =>
        API.route({
            url,
            method: "GET",
            route: `/technicians`,
            query,
        }),
    "GET /technicians/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/technicians/${id}`,
        }),
    "POST /technicians": (url: string, body: {userId: string}) =>
        API.route<Technician[]>({
            url,
            method: "POST",
            route: `/technicians`,
            body
        }),
    "PUT /technicians/:id": (
        url: string,
        { id }: { id: string },
        body: Technician,
    ) =>
        API.route<Technician>({
            url,
            method: "PUT",
            route: `/technicians/${id}`,
            body: body,
        }),
    "DELETE /technicians/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/technicians/${id}`,
        }),
} as const satisfies ApiBaseRouteCollection<"technicians">;

export type TechnicianRoute = keyof typeof technicianRoutes;
