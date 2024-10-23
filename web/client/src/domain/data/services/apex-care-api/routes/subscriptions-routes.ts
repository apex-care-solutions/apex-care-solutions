export const subscriptionsRoutes = {
    "GET /subscriptions": () => ({
        method: "GET",
        route: `/subscriptions`,
    }),
    "GET /clients/:id/subscription": ({ id }: { id: string }) => ({
        method: "GET",
        route: `/clients/${id}/subscription`,
    }),
    "POST /subscriptions": () => ({
        method: "POST",
        route: `/subscriptions`,
    }),
    "DELETE /subscriptions/:id": ({ id }: { id: string }) => ({
        method: "DELETE",
        route: `/subscriptions/${id}`,
    }),
};
