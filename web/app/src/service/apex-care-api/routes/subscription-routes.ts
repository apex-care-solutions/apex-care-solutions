import { Subscription } from "@/domain/models/subscription";
import { API } from "../../api";
import { ApiBaseRouteCollection } from "../../api-route";

export const subscriptionRoutes = {
    "GET /subscriptions": (
        url: string,
        query: { take: number; page: number },
    ) =>
        API.route({
            url,
            method: "GET",
            route: `/subscriptions`,
            query,
        }),
    "GET /subscriptions/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "GET",
            route: `/subscriptions/${id}`,
        }),
    "POST /subscriptions": (url: string) =>
        API.route<Subscription[]>({
            url,
            method: "POST",
            route: `/subscriptions`,
        }),
    "PUT /subscriptions/:id": (
        url: string,
        { id }: { id: string },
        body: Subscription,
    ) =>
        API.route<Subscription>({
            url,
            method: "PUT",
            route: `/subscriptions/${id}`,
            body: body,
        }),
    "DELETE /subscriptions/:id": (url: string, { id }: { id: string }) =>
        API.route({
            url,
            method: "DELETE",
            route: `/subscriptions/${id}`,
        }),
} as const satisfies ApiBaseRouteCollection<"subscriptions">;

export type SubscriptionRoute = keyof typeof subscriptionRoutes;
