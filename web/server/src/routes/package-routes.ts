import { Router } from "express";
import {
    getAllPackages,
    getPackageById,
    createPackage,
    updatePackage,
    deletePackage,
} from "../controllers/package-controller";

export const packageRouter = Router();

packageRouter.get("/", getAllPackages);
packageRouter.get("/:id", getPackageById);
packageRouter.post("/", createPackage);
packageRouter.put("/:id", updatePackage);
packageRouter.delete("/:id", deletePackage);
