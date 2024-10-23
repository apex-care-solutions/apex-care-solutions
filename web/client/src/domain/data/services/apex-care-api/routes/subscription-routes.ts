import { ApiRoute } from "../../api-route";

export const subscriptionRoutes: { [key: string]: ApiRoute } = {
    "GET /subscriptions": () => ({
        method: "GET",
        route: `/subscriptions`,
    }),
    "GET /users/:id/subscription": ({
        params,
    }: {
        params: { id: string };
    }) => ({
        method: "GET",
        route: `/clients/${params.id}/subscription`,
    }),
    "POST /subscriptions": () => ({
        method: "POST",
        route: `/subscriptions`,
    }),
    "DELETE /subscriptions/:id": ({ id }: { id: string }) => ({
        method: "DELETE",
        route: `/subscriptions/${id}`,
    }),
} as const;

export type SubscriptionRoute = keyof typeof subscriptionRoutes;
