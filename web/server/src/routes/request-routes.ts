import { Router } from "express";
import {
    getAllRequests,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest,
} from "../controllers/request-controller";

export const requestRouter = Router();

requestRouter.get("/request", getAllRequests);
requestRouter.get("/request/:id", getRequestById);
requestRouter.post("/request", createRequest);
requestRouter.put("/request/:id", updateRequest);
requestRouter.delete("/request/:id", deleteRequest);
