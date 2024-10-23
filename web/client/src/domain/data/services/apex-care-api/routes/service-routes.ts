import { ApiRoute } from "../../api-route";

export const serviceRoutes: { [key: string]: ApiRoute } = {
    "GET /services": () => ({
        method: "GET",
        route: `/services`,
    }),
    "GET /services/:id": ({ id }: { id: string }) => ({
        method: "GET",
        route: `/services/${id}`,
    }),
    "POST /services": () => ({
        method: "POST",
        route: `/services`,
    }),
    "DELETE /services/:id": ({ id }: { id: string }) => ({
        method: "DELETE",
        route: `/services/${id}`,
    }),
} as const;

export type ServiceRoute = keyof typeof serviceRoutes;
