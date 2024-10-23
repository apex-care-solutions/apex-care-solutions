import { Job } from "@prisma/client";
import { Request, Response } from "express";

export const getAllJobs = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const jobs = await fetchAllJobs();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getJobById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const job = await fetchJobById(id);
        if (!job) {
            res.status(404).json({ error: "Job not found" });
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createJob = async (req: Request, res: Response): Promise<void> => {
    try {
        const newJob = await addNewJob(req.body);
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const updateJob = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedJob = await modifyJob(id, req.body);
        if (!updatedJob) {
            res.status(404).json({ error: "Job not found" });
        }
        res.json(updatedJob);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const deleteJob = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedJob = await removeJob(id);
        if (!deletedJob) {
            res.status(404).json({ error: "Job not found" });
        }
        res.sendStatus(204).json({message: "Removed succesfully"});
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function fetchAllJobs(): Promise<Job[]> {
    throw new Error("");
}

async function fetchJobById(id: string): Promise<Job> {
    throw new Error("");
}

async function addNewJob(jobData: any): Promise<Job> {
    throw new Error("");
}

async function modifyJob(id: string, jobData: any): Promise<boolean> {
    throw new Error("");
}

async function removeJob(id: string): Promise<boolean> {
    throw new Error("");
}
