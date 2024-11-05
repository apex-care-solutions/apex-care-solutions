import { API } from "../../../domain/api/api";
import { Service } from "../../../domain/models";

export const serviceRoutes = {
    "GET /service/": (url: string) =>
        API.route<Service[]>({
            url,
            method: "GET",
            route: `/services/`,
        }),
} as const;

export type ServiceRoute = keyof typeof serviceRoutes;
