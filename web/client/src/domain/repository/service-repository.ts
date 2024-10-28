import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { Service } from "../model/service";
import { IRepository } from "./repository";

export class ServiceRepository implements IRepository<Service> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<Service[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Service | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Service): Promise<Service> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<Service>): Promise<Service | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
