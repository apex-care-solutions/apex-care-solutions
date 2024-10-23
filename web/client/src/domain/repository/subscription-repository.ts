import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { SubscriptionRoute } from "../data/services/apex-care-api/routes/subscription-routes";
import { Subscription } from "../model/subscription";
import { IRepository } from "./repository";

export class SubscriptionRepository implements IRepository<Subscription> {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<Subscription[]> {
        return await this.apexCareApi.request<SubscriptionRoute>(
            "GET /subscriptions",
        );
    }

    async findById(id: string): Promise<Subscription | null> {
        try {
            return await this.apexCareApi.request<SubscriptionRoute>(
                "GET /subscriptions/:id",
                { id },
            );
        } catch {
            return null;
        }
    }

    async create(entity: Subscription): Promise<Subscription> {
        return await this.apexCareApi.request<SubscriptionRoute>(
            "POST /subscriptions",
            undefined,
            undefined,
            entity,
        );
    }

    async update(
        id: string,
        entity: Partial<Subscription>,
    ): Promise<Subscription | null> {
        try {
            return await this.apexCareApi.request<SubscriptionRoute>(
                "PUT /subscriptions/:id",
                { id },
                undefined,
                entity,
            );
        } catch {
            return null;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await this.apexCareApi.request<SubscriptionRoute>(
                "DELETE /subscriptions/:id",
                { id },
            );
            return true;
        } catch {
            return false;
        }
    }
}
