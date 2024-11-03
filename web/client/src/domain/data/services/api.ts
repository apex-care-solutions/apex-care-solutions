import { ApiRoute } from "./api-route";
import axios, { AxiosRequestConfig } from 'axios';


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

export type APIResponse<T> = {
    success: boolean,
    statusCode: number,
    message?: string,
    data?: T,
    error?: string,
    redirect?: string
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
        headers?: Record<string, string>;
    }): Promise<APIResponse<T>> {
        const config: AxiosRequestConfig = {
            method,
            url: `${url}${route}`,
            headers: {
                ...headers,
            },
            data: body,
            params: query,
            withCredentials: true,  
        };
    
        try {
            const response = await axios.request<APIResponse<T>>(config);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(`HTTP error! status: ${error.response.status}`);
            }
            throw new Error('Network error or invalid request');
        }
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
            headers
        )) as ReturnType<Routes[Key]>;
    }
}
