import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { ReviewRoute } from "../data/services/apex-care-api/routes/review-routes";
import { Review } from "../model/review";
import { IRepository } from "./repository";

export class ReviewRepository implements IRepository<Review> {
    constructor(private apexCareApi: ApexCareApi) {}
}
