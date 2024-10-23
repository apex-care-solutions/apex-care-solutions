import { PackageService } from "./package-service";

export interface Service {
    serviceId: string;
    name: string;
    description: string;
    packages?: PackageService[];
}
