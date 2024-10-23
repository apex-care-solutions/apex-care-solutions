import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { ReviewRoute } from "../data/services/apex-care-api/routes/review-routes";
import { Review } from "../model/review";
import { IRepository } from "./repository";

export class ReviewRepository implements IRepository<Review> {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<Review[]> {
        return await this.apexCareApi.request<ReviewRoute>("GET /reviews");
    }

    async findById(id: string): Promise<Review | null> {
        try {
            return await this.apexCareApi.request<ReviewRoute>(
                "GET /reviews/:id",
                { id },
            );
        } catch {
            return null;
        }
    }

    async create(entity: Review): Promise<Review> {
        return await this.apexCareApi.request<ReviewRoute>(
            "POST /reviews",
            undefined,
            undefined,
            entity,
        );
    }

    async update(id: string, entity: Partial<Review>): Promise<Review | null> {
        try {
            return await this.apexCareApi.request<ReviewRoute>(
                "PUT /reviews/:id",
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
            await this.apexCareApi.request<ReviewRoute>("DELETE /reviews/:id", {
                id,
            });
            return true;
        } catch {
            return false;
        }
    }
}
