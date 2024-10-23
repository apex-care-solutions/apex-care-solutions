import { API } from "./api";

export type ApiRoute = (
    url: string,
    params?: any,
    query?: any,
    body?: any,
) => any;

export type ApiBaseRouteCollection<T extends string> = {
    [K in
        | `GET /${T}`
        | `GET /${T}/:id`
        | `POST /${T}`
        | `PUT /${T}/:id`
        | `DELETE /${T}/:id`]: ApiRoute;
};

export type ApiRouteCollection = { [key: string]: ApiRoute };

export function implementBaseApi<T>(
    resource: string,
): ApiBaseRouteCollection<typeof resource> {
    return {
        [`GET /${resource}`]: (
            url: string,
            _params: undefined,
            query: { take: number; page: number },
        ) =>
            API.route({
                url,
                method: "GET",
                route: `/${resource}`,
                query,
            }),
        [`GET /${resource}/:id`]: (url: string, { id }: { id: string }) =>
            API.route({
                url,
                method: "GET",
                route: `/${resource}/${id}`,
            }),
        [`POST /${resource}`]: (
            url: string,
            _params: undefined,
            _query: undefined,
            body: T,
        ) =>
            API.route({
                url,
                method: "POST",
                route: `/${resource}`,
                body,
            }),
        [`PUT /${resource}/:id`]: (
            url: string,
            { id }: { id: string },
            _query: undefined,
            body: T,
        ) =>
            API.route({
                url,
                method: "PUT",
                route: `/${resource}/${id}`,
                body,
            }),
        [`DELETE /${resource}/:id`]: (url: string, { id }: { id: string }) =>
            API.route({
                url,
                method: "DELETE",
                route: `/${resource}/${id}`,
            }),
    } as ApiBaseRouteCollection<typeof resource>;
}
