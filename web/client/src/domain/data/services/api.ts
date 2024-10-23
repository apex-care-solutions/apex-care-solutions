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

    async request<Key extends keyof Routes>(
        request: Key,
        params?: Parameters<Routes[Key]>[0],
        headers?: RequestHeaders,
        data?: any,
    ): Promise<any> {
        const { method, route } = this.routes[request](params);

        const options: RequestInit = {
            method,
            headers: {
                ...this.headers,
                ...headers,
            },
            body: data ? JSON.stringify(data) : undefined,
        };

        const response = await fetch(this.baseUrl + route, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }
}
