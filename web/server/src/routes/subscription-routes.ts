import { Router } from "express";
import {
    getAllSubscriptions,
    getSubscriptionById,
    createSubscription,
    updateSubscription,
    deleteSubscription,
} from "../controllers/subscriptions-controller";

export const subscriptionsRouter = Router();

subscriptionsRouter.get("/", getAllSubscriptions);
subscriptionsRouter.get("/:id", getSubscriptionById);
subscriptionsRouter.post("/", createSubscription);
subscriptionsRouter.put("/:id", updateSubscription);
subscriptionsRouter.delete("/:id", deleteSubscription);
