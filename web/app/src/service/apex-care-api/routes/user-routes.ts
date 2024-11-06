import { API } from "@/domain/api/api";
import { ApiBaseRouteCollection } from "@/domain/api/api-route";
import { User } from "@/domain/models/user";

export const userRoutes = {
    "GET /users": (url: string, query: { take: number; page: number }) =>
        API.route({
            url,
            method: "GET",
            route: `/users`,
            query,
        }),
    "GET /users/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/users/${id}`,
        }),
    "POST /users": (url: string) =>
        API.route<User[]>({
            url,
            method: "POST",
            route: `/users`,
        }),
    "PUT /users/:id": (url: string, { id }: { id: string }, body: User) =>
        API.route<User>({
            url,
            method: "PUT",
            route: `/users/${id}`,
            body: body,
        }),
    "DELETE /users/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/users/${id}`,
        }),
} as const satisfies ApiBaseRouteCollection<"users">;

export type UserRoute = keyof typeof userRoutes;
