import { Router } from "express";
import {
    getAllServices,
    getServiceById,
    createService,
    updateService,
    deleteService,
} from "../controllers/services-controller";

export const servicesRouter = Router();

servicesRouter.get("/services", getAllServices);
servicesRouter.get("/services/:id", getServiceById);
servicesRouter.post("/services", createService);
servicesRouter.put("/services/:id", updateService);
servicesRouter.delete("/services/:id", deleteService);
