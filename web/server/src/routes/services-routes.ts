import { Router } from "express";
import {
    getAllServices,
    getServiceById,
    createService,
    updateService,
    deleteService,
} from "../controllers/services-controller";

export const servicesRouter = Router();

servicesRouter.get("/", getAllServices);
servicesRouter.get("/:id", getServiceById);
servicesRouter.post("/", createService);
servicesRouter.put("/:id", updateService);
servicesRouter.delete("/:id", deleteService);
