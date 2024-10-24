import { ApiRoute } from "./api-route";

export interface RequestHeaders {
    Authorization?: string;
    "Content-Type"?: string;
    Accept?: string;
    "User-Agent"?: string;
    "Cache-Control"?: string;
    "X-Request-ID"?: string;
    Cookie?: string;
}

export interface ResponseHeaders {
    "Content-Type"?: string;
    "Content-Length"?: string;
    ETag?: string;
    "Cache-Control"?: string;
    Location?: string;
    "Access-Control-Allow-Origin"?: string;
    "X-RateLimit-Limit"?: string;
    "X-RateLimit-Remaining"?: string;
    "X-RateLimit-Reset"?: string;
}

export abstract class API<Routes extends Record<string, ApiRoute>> {
    baseUrl: string;
    headers: RequestHeaders;
    abstract routes: Routes;

    constructor(baseUrl: string, headers?: RequestHeaders) {
        this.baseUrl = baseUrl;
        this.headers = headers || {};
    }

    static async route<T>({
        method,
        url,
        route,
        query,
        body,
        headers,
    }: {
        method: string;
        url: string;
        route: string;
        query?: any;
        body?: any;
        headers?: RequestHeaders;
    }): Promise<T> {
        const options: RequestInit = {
            method,
            headers: {
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        };

        const response = await fetch(url + route, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json() as Promise<T>;
    }

    async request<Key extends keyof Routes>(
        request: Key,
        params?: Parameters<Routes[Key]>[1],
        query?: Parameters<Routes[Key]>[2],
        body?: Parameters<Routes[Key]>[3],
        headers?: RequestHeaders,
    ): Promise<ReturnType<Routes[Key]>> {
        const routeHandler = this.routes[request];
        return (await routeHandler(
            this.baseUrl,
            params,
            query,
            body,
        )) as ReturnType<Routes[Key]>;
    }
}
