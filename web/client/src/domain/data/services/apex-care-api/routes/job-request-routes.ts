import { ApiRoute } from "../../api-route";

export const jobRequestRoutes: { [key: string]: ApiRoute } = {
    "GET /requests": (url: string) => ({
        method: "GET",
        route: `/requests`,
    }),
    "GET /requests/:id": (url: string, { id }: { id: string }) => ({
        method: "GET",
        route: `/requests/${id}`,
    }),
    "POST /requests": (url: string) => ({
        method: "POST",
        route: `/requests`,
    }),
    "PUT /requests/:id": (url: string, { id }: { id: string }) => ({
        method: "PUT",
        route: `/requests/${id}`,
    }),
    "DELETE /requests/:id": (url: string, { id }: { id: string }) => ({
        method: "DELETE",
        route: `/requests/${id}`,
    }),
} as const;

export type JobRequestRoute = keyof typeof jobRequestRoutes;
