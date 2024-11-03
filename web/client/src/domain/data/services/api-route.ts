export type ApiRoute = (
    url: string,
    params?: any,
    query?: any,
    body?: any,
    headers?: any
) => Promise<any>;

export type ApiBaseRouteCollection<T extends string> = {
    [K in
        | `GET /${T}`
        | `GET /${T}/:id`
        | `POST /${T}`
        | `PUT /${T}/:id`
        | `DELETE /${T}/:id`]: any;
};

export type ApiRouteCollection<T extends string> = ApiBaseRouteCollection<T> & {
    [key: string]: ApiRoute;
};
