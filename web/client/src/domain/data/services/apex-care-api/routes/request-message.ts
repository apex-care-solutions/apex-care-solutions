import { RequestMessage } from "@/domain/model/request-message";
import { API } from "../../api";
import { ApiBaseRouteCollection } from "../../api-route";

export const requestMessageRoutes = {
    "GET /request-messages": (
        url: string,
        query: { take: number; page: number },
    ) =>
        API.route({
            url,
            method: "GET",
            route: `/request-messages`,
            query,
        }),
    "GET /request-messages/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/request-messages/${id}`,
        }),
    "POST /request-messages": (url: string) =>
        API.route<RequestMessage[]>({
            url,
            method: "POST",
            route: `/request-messages`,
        }),
    "PUT /request-messages/:id": (
        url: string,
        { id }: { id: string },
        body: RequestMessage,
    ) =>
        API.route<RequestMessage>({
            url,
            method: "PUT",
            route: `/request-messages/${id}`,
            body: body,
        }),
    "DELETE /request-messages/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/request-messages/${id}`,
        }),
} as const satisfies ApiBaseRouteCollection<"request-messages">;

export type RequestMessageRoute = keyof typeof requestMessageRoutes;
