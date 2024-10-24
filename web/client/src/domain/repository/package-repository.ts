import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { PackageRoute } from "../data/services/apex-care-api/routes/package-routes";
import { Package } from "../model/package";
import { IRepository } from "./repository";

export class PackageRepository implements IRepository<Package> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Package | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Package): Promise<Package> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<Package>): Promise<Package | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
