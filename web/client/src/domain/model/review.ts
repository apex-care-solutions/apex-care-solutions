export class Review {
    reviewId: string;
    feedback: string;
    rating: number;
    jobId: string;

    constructor(
        reviewId: string,
        feedback: string,
        rating: number,
        jobId: string,
    ) {
        this.reviewId = reviewId;
        this.feedback = feedback;
        this.rating = rating;
        this.jobId = jobId;
    }
}
