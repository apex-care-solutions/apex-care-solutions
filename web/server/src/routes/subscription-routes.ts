import { Router } from "express";
import {
    getAllSubscriptions,
    getSubscriptionById,
    createSubscription,
    updateSubscription,
    deleteSubscription,
} from "../controllers/subscriptions-controller";

export const subscriptionsRouter = Router();

subscriptionsRouter.get("/subscriptions", getAllSubscriptions);
subscriptionsRouter.get("/subscriptions/:id", getSubscriptionById);
subscriptionsRouter.post("/subscriptions", createSubscription);
subscriptionsRouter.put("/subscriptions/:id", updateSubscription);
subscriptionsRouter.delete("/subscriptions/:id", deleteSubscription);
