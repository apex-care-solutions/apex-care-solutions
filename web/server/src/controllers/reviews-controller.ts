import { Review } from "@prisma/client";
import { Request, Response } from "express";

export const getAllReviews = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const reviews = await fetchAllReviews();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getReviewById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const reviewsData = await fetchReviewById(id);
        if (!reviewsData) {
            res.status(404).json({ error: "Review not found" });
        }
        res.json(reviewsData);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const newReview = await addNewReview(req.body);
        res.json(newReview);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const updateReview = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedRequest = await modifyReview(id, req.body);
        if (!updatedRequest) {
            res.status(404).json({ error: "Review not found" });
        }
        res.json(updatedRequest);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const deleteReview = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedReview = await removeReview(id);
        if (!deletedReview) {
            res.status(404).json({ error: "Review not found" });
        }
        res.sendStatus(204).json({message: "Removed succesfully"});
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function fetchAllReviews(): Promise<Review[]> {
    throw new Error("");
}

async function fetchReviewById(id: string): Promise<Review> {
    throw new Error("");
}

async function addNewReview(reviewData: any): Promise<Review> {
    throw new Error("");
}

async function modifyReview(id: string, reviewData: any): Promise<boolean> {
    throw new Error("");
}

async function removeReview(id: string): Promise<boolean> {
    throw new Error("");
}
