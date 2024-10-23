export const packagesRoutes = {
    "GET /packages": () => ({
        method: "GET",
        route: `/packages`,
    }),
    "GET /packages/:id": ({ id }: { id: string }) => ({
        method: "GET",
        route: `/packages/${id}`,
    }),
    "POST /packages": () => ({
        method: "POST",
        route: `/packages`,
    }),
    "PUT /packages/:id": ({ id }: { id: string }) => ({
        method: "PUT",
        route: `/packages/${id}`,
    }),
    "DELETE /packages/:id": ({ id }: { id: string }) => ({
        method: "DELETE",
        route: `/packages/${id}`,
    }),
};
