import { Router } from "express";
import {
    getAllRequests,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest,
} from "../controllers/request-controller";

export const requestRouter = Router();

requestRouter.get("/", getAllRequests);
requestRouter.get("/:id", getRequestById);
requestRouter.post("/", createRequest);
requestRouter.put("/:id", updateRequest);
requestRouter.delete("/:id", deleteRequest);
