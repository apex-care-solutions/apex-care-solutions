export const reviewsRoutes = {
    "GET /reviews": () => ({
        method: "GET",
        route: `/reviews`,
    }),
    "GET /jobs/:id/review": ({ id }: { id: string }) => ({
        method: "GET",
        route: `/jobs/${id}/review`,
    }),
    "POST /jobs/:id/review": ({ id }: { id: string }) => ({
        method: "POST",
        route: `/jobs/${id}/review`,
    }),
    "PUT /reviews/:id": ({ id }: { id: string }) => ({
        method: "PUT",
        route: `/reviews/${id}`,
    }),
    "DELETE /reviews/:id": ({ id }: { id: string }) => ({
        method: "DELETE",
        route: `/reviews/${id}`,
    }),
};
