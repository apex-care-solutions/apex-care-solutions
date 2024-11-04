import { Router } from "express";
import {
    getAllTechnicians,
    getTechnicianById,
    createTechnician,
    updateTechnician,
    deleteTechnician,
} from "../controllers/technician-controller";

export const techniciansRouter = Router();

techniciansRouter.get("/", getAllTechnicians);
techniciansRouter.get("/:id", getTechnicianById);
techniciansRouter.post("/", createTechnician);
techniciansRouter.put(":id", updateTechnician);
techniciansRouter.delete("/:id", deleteTechnician);
