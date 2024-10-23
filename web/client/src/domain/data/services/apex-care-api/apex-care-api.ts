import { API, RequestHeaders } from "../api";
import { apexCareRoutes } from "./routes";

export class ApexCareApi extends API<typeof apexCareRoutes> {
    routes = apexCareRoutes;

    constructor(baseUrl: string, headers: RequestHeaders) {
        super(baseUrl, headers);
    }
}
