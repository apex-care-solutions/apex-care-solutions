import { Review } from "@/domain/models/review";
import { API } from "../../api";
import { ApiBaseRouteCollection } from "../../api-route";

export const reviewRoutes = {
    "GET /reviews": (url: string, query: { take: number; page: number }) =>
        API.route({
            url,
            method: "GET",
            route: `/reviews`,
            query,
        }),
    "GET /reviews/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/reviews/${id}`,
        }),
    "POST /reviews": (url: string) =>
        API.route<Review[]>({
            url,
            method: "POST",
            route: `/reviews`,
        }),
    "PUT /reviews/:id": (url: string, { id }: { id: string }, body: Review) =>
        API.route<Review>({
            url,
            method: "PUT",
            route: `/reviews/${id}`,
            body: body,
        }),
    "DELETE /reviews/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/reviews/${id}`,
        }),
} as const satisfies ApiBaseRouteCollection<"reviews">;

export type ReviewRoute = keyof typeof reviewRoutes;
