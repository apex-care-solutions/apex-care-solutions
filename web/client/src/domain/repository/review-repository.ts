import { Review } from "../model/review";
import { IRepository } from "./repository";

export interface IReviewRepository extends IRepository<Review> {
    findByJobId(jobId: string): Promise<Review | null>;
}
