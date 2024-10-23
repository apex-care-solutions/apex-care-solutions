export class Subscription {
    subscriptionId: string;
    clientId: string;
    dateSubscribed: Date;
    packageId: string;

    constructor(
        subscriptionId: string,
        clientId: string,
        dateSubscribed: Date,
        packageId: string,
    ) {
        this.subscriptionId = subscriptionId;
        this.clientId = clientId;
        this.dateSubscribed = dateSubscribed;
        this.packageId = packageId;
    }
}
