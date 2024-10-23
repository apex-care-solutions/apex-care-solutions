import { PackagePromotion } from "../model/package-promotion";
import { IRepository } from "./repository";

export interface IPackagePromotionRepository
    extends IRepository<PackagePromotion> {
    findByPackageId(packageId: string): Promise<PackagePromotion[]>;
}
