import { Router } from "express";
import {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
} from "../controllers/reviews-controller";

export const reviewsRouter = Router();

reviewsRouter.get("/reviews", getAllReviews);
reviewsRouter.get("/reviews/:id", getReviewById);
reviewsRouter.post("/reviews", createReview);
reviewsRouter.put("/reviews/:id", updateReview);
reviewsRouter.delete("/reviews/:id", deleteReview);
