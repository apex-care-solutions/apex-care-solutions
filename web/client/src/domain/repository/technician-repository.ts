import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { TechnicianRoute } from "../data/services/apex-care-api/routes/technician-routes";
import { Technician } from "../model/technician";
import { IRepository } from "./repository";

export class TechnicianRepository implements IRepository<Technician> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<Technician[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Technician | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Technician): Promise<Technician> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<Technician>): Promise<Technician | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
