import { API, RequestHeaders } from "../../domain/api/api";
import { APEX_CARE_API_BASE_URL } from "../../utils/env";
import {apexCareRoutes} from "./routes"

export class ApexCareApi extends API<typeof apexCareRoutes> {
    routes = apexCareRoutes;

    constructor(baseUrl: string, headers: RequestHeaders) {
        super(baseUrl, headers);
    }
}

export const apexCareApi = new ApexCareApi(APEX_CARE_API_BASE_URL, {})