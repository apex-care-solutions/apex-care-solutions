import { Package } from "../model/package";
import { IRepository } from "./repository";

export interface IPackageRepository extends IRepository<Package> {
    findByDescription(description: string): Promise<Package[]>;
}
