export class PackageService {
    packageServiceId: string;
    packageId: string;
    serviceId: string;

    constructor(
        packageServiceId: string,
        packageId: string,
        serviceId: string,
    ) {
        this.packageServiceId = packageServiceId;
        this.packageId = packageId;
        this.serviceId = serviceId;
    }
}
