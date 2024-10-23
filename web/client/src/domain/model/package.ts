export class Package {
    packageId: string;
    description: string;
    flatRate: number;

    constructor(packageId: string, description: string, flatRate: number) {
        this.packageId = packageId;
        this.description = description;
        this.flatRate = flatRate;
    }
}
