export const usersRoutes = {
    "GET /users": () => ({
        method: "GET",
        route: `/users`,
    }),
    "GET /users/:id": ({ id }: { id: string }) => ({
        method: "GET",
        route: `/users/${id}`,
    }),
    "POST /users": () => ({
        method: "POST",
        route: `/users`,
    }),
    "PUT /users/:id": ({ id }: { id: string }) => ({
        method: "PUT",
        route: `/users/${id}`,
    }),
    "DELETE /users/:id": ({ id }: { id: string }) => ({
        method: "DELETE",
        route: `/users/${id}`,
    }),
};
