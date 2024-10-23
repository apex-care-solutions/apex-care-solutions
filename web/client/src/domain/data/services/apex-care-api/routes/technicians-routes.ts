export const techniciansRoutes = {
    "GET /technicians": () => ({
        method: "GET",
        route: `/technicians`,
    }),
    "GET /technicians/:id": ({ id }: { id: string }) => ({
        method: "GET",
        route: `/technicians/${id}`,
    }),
    "POST /technicians": () => ({
        method: "POST",
        route: `/technicians`,
    }),
    "PUT /technicians/:id": ({ id }: { id: string }) => ({
        method: "PUT",
        route: `/technicians/${id}`,
    }),
    "DELETE /technicians/:id": ({ id }: { id: string }) => ({
        method: "DELETE",
        route: `/technicians/${id}`,
    }),
};
