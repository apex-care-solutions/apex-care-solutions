export const jobsRoutes = {
    "GET /jobs": () => ({
        method: "GET",
        route: `/jobs`,
    }),
    "GET /jobs/:id": ({ id }: { id: string }) => ({
        method: "GET",
        route: `/jobs/${id}`,
    }),
    "POST /jobs": () => ({
        method: "POST",
        route: `/jobs`,
    }),
    "PUT /jobs/:id": ({ id }: { id: string }) => ({
        method: "PUT",
        route: `/jobs/${id}`,
    }),
    "DELETE /jobs/:id": ({ id }: { id: string }) => ({
        method: "DELETE",
        route: `/jobs/${id}`,
    }),
};
