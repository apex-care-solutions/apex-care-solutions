import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { Review } from "../model/review";
import { IRepository } from "./repository";

export class ReviewRepository implements IRepository<Review> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<Review[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Review | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Review): Promise<Review> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<Review>): Promise<Review | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
