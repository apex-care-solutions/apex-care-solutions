import { User } from "@/domain/model/user";
import { ApiRoute } from "../../api-route";

export const userRoutes: { [key: string]: ApiRoute } = {
    "GET /users": (_params, query) => ({
        method: "GET",
        route: `/users`,
        query,
        returns: Array<User>,
    }),
    "GET /users/:id": ({ id }) => ({
        method: "GET",
        route: `/users/${id}`,
        returns: User,
    }),
    "POST /users": (_params, _query, body: User) => ({
        method: "POST",
        route: `/users`,
        body,
        returns: User,
    }),
    "PUT /users/:id": ({ id }, _query, body: Partial<User>) => ({
        method: "PUT",
        route: `/users/${id}`,
        body,
        returns: Boolean,
    }),
    "DELETE /users/:id": ({ id }) => ({
        method: "DELETE",
        route: `/users/${id}`,
        returns: Boolean,
    }),
} as const;

export type UserRoute = keyof typeof userRoutes;
