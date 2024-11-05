import { API, RequestHeaders } from "../api";
import { apexCareRoutes } from "./routes";

export type ApexAPIResponse<T> = {
    success: boolean,
    statusCode: number,
    message?: string,
    data?: T,
    error?: string,
    redirect?: string
}

export class ApexCareApi extends API<typeof apexCareRoutes> {
    routes = apexCareRoutes;

    constructor(baseUrl: string, headers: RequestHeaders) {
        super(baseUrl, headers);
    }
}

export const apexCareApi = new ApexCareApi("http://localhost:3333", {})