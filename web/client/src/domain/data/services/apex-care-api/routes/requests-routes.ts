export const requestsRoutes = {
    "GET /requests": () => ({
        method: "GET",
        route: `/requests`,
    }),
    "GET /requests/:id": ({ id }: { id: string }) => ({
        method: "GET",
        route: `/requests/${id}`,
    }),
    "POST /requests": () => ({
        method: "POST",
        route: `/requests`,
    }),
    "PUT /requests/:id": ({ id }: { id: string }) => ({
        method: "PUT",
        route: `/requests/${id}`,
    }),
    "DELETE /requests/:id": ({ id }: { id: string }) => ({
        method: "DELETE",
        route: `/requests/${id}`,
    }),
};
