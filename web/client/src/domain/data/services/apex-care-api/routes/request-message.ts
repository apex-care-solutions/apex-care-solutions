import { RequestMessage } from "@/domain/model/request-message";
import { ApiRoute } from "../../api-route";
import { API } from "../../api";

export const requestMessageRoutes: { [key: string]: ApiRoute } = {
    "GET /request-messages": (_params, query) => ({
        method: "GET",
        route: `/request-messages`,
        query,
    }),
    "GET /request-messages/:id": ({ id }) => ({
        method: "GET",
        route: `/request-messages/${id}`,
    }),
    "POST /request-messages": (_params, _query, body: RequestMessage) =>
        API.route({
            method: "POST",
            route: `/request-messages`,
            body,
        }),
    "DELETE /request-messages/:id": ({ id }) => ({
        method: "DELETE",
        route: `/request-messages/${id}`,
    }),
} as const;

export type RequestMessageRoute = keyof typeof requestMessageRoutes;
