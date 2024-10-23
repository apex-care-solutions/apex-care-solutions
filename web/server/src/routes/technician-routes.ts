import { Router } from "express";
import {
    getAllTechnicians,
    getTechnicianById,
    createTechnician,
    updateTechnician,
    deleteTechnician,
} from "../controllers/technician-controller";

export const techniciansRouter = Router();

techniciansRouter.get("/technicians", getAllTechnicians);
techniciansRouter.get("/technicians/:id", getTechnicianById);
techniciansRouter.post("/technicians", createTechnician);
techniciansRouter.put("/technicians/:id", updateTechnician);
techniciansRouter.delete("/technicians/:id", deleteTechnician);
