import { Router } from "express";
import {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
} from "../controllers/jobs-controller";

export const jobsRouter = Router();

jobsRouter.get("/jobs", getAllJobs);
jobsRouter.get("/jobs/:id", getJobById);
jobsRouter.post("/jobs", createJob);
jobsRouter.put("/jobs/:id", updateJob);
jobsRouter.delete("/jobs/:id", deleteJob);
