import { PackagePromotion } from "./package-promotion";
import { PackageService } from "./package-service";

export interface Package {
    packageId: string;
    description: string;
    flatRate: number;
    promotions?: PackagePromotion[];
    services?: PackageService[];
}
