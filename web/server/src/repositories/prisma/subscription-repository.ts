import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { Subscription } from "../model/subscription";
import { IRepository } from "./repository";

export class SubscriptionRepository implements IRepository<Subscription> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<Subscription[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Subscription | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Subscription): Promise<Subscription> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<Subscription>): Promise<Subscription | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
