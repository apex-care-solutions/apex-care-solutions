export const servicesRoutes = {
    "GET /services": () => ({
        method: "GET",
        route: `/services`,
    }),
    "GET /services/:id": ({ id }: { id: string }) => ({
        method: "GET",
        route: `/services/${id}`,
    }),
    "POST /services": () => ({
        method: "POST",
        route: `/services`,
    }),
    "DELETE /services/:id": ({ id }: { id: string }) => ({
        method: "DELETE",
        route: `/services/${id}`,
    }),
};
