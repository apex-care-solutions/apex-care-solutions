import { Router } from "express";
import {
    getAllPackages,
    getPackageById,
    createPackage,
    updatePackage,
    deletePackage,
} from "../controllers/package-controller";

export const packageRouter = Router();

packageRouter.get("/package", getAllPackages);
packageRouter.get("/package/:id", getPackageById);
packageRouter.post("/package", createPackage);
packageRouter.put("/package/:id", updatePackage);
packageRouter.delete("/package/:id", deletePackage);
