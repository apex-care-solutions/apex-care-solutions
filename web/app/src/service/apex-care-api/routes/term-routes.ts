import { Term } from "@/domain/models/term";
import { API } from "../../api";
import { ApiBaseRouteCollection } from "../../api-route";

export const termRoutes = {
    "GET /terms": (url: string, query: { take: number; page: number }) =>
        API.route({
            url,
            method: "GET",
            route: `/terms`,
            query,
        }),
    "GET /terms/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/terms/${id}`,
        }),
    "POST /terms": (url: string) =>
        API.route<Term[]>({
            url,
            method: "POST",
            route: `/terms`,
        }),
    "PUT /terms/:id": (url: string, { id }: { id: string }, body: Term) =>
        API.route<Term>({
            url,
            method: "PUT",
            route: `/terms/${id}`,
            body: body,
        }),
    "DELETE /terms/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/terms/${id}`,
        }),
} as const satisfies ApiBaseRouteCollection<"terms">;

export type TermRoute = keyof typeof termRoutes;
