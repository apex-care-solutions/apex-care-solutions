import { PackageService } from "../model/package-service";
import { IRepository } from "./repository";

export interface IPackageServiceRepository extends IRepository<PackageService> {
    findByServiceId(serviceId: string): Promise<PackageService[]>;
}
