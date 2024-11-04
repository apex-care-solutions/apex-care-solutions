import { Router } from "express";
import {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
    jobStatusUpdate,
} from "../controllers/jobs-controller";

export const jobsRouter = Router();

jobsRouter.get("/", getAllJobs);
jobsRouter.get("/:id", getJobById);
jobsRouter.post("/", createJob);
jobsRouter.put("/status/:id", jobStatusUpdate);
jobsRouter.put("/:id", updateJob);
jobsRouter.delete("/:id", deleteJob);



