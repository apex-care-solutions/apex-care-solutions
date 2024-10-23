import { ApiRoute } from "./api-route";

export interface RequestHeaders {
    Authorization?: string; // Bearer token for authentication
    "Content-Type"?: string; // e.g., application/json
    Accept?: string; // e.g., application/json
    "User-Agent"?: string; // Client software information
    "Cache-Control"?: string; // Caching directives
    "X-Request-ID"?: string; // Unique request identifier
    Cookie?: string; // Stored cookies
}

export interface ResponseHeaders {
    "Content-Type"?: string; // e.g., application/json
    "Content-Length"?: string; // Size of the response body
    ETag?: string; // Unique identifier for a resource version
    "Cache-Control"?: string; // Caching directives
    Location?: string; // URL of the newly created resource
    "Access-Control-Allow-Origin"?: string; // CORS header
    "X-RateLimit-Limit"?: string; // Max requests allowed
    "X-RateLimit-Remaining"?: string; // Remaining requests
    "X-RateLimit-Reset"?: string; // When the rate limit resets
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

        return (await response.json()) as T;
    }

    async request<Key extends keyof Routes>(
        request: Key,
        params?: Parameters<Routes[Key]>[0],
        headers?: RequestHeaders,
        query?: any,
        body?: any,
    ): Promise<any> {
        this.routes[request](this.baseUrl, params, query, body);
    }
}
