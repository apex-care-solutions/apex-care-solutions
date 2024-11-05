import { APIResponse } from "../../domain/api/api-response";
import { Service } from "../../domain/models";
import { ApexCareApi } from "../../service/apex-care/apex-care-api";

export class ServiceRepository {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<APIResponse<Service[]>> {
        return await this.apexCareApi.request("GET /service/");
    }

}
