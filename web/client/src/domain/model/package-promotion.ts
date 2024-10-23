export class PackagePromotion {
    packagePromotionId: string;
    discount: number;
    validFrom: Date;
    validTo: Date;
    packageId: string;

    constructor(
        packagePromotionId: string,
        discount: number,
        validFrom: Date,
        validTo: Date,
        packageId: string,
    ) {
        this.packagePromotionId = packagePromotionId;
        this.discount = discount;
        this.validFrom = validFrom;
        this.validTo = validTo;
        this.packageId = packageId;
    }
}
