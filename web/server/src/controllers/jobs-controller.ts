import { Job, Technician } from "@prisma/client";
import { Request, Response } from "express";
import { notifierFactory } from "../lib/notify/notifier-factory";
import {
    AuthorizedTechnicianRequest,
    AuthorizedUserRequest,
} from "../utils/auth/authorized";
import { HOST, PORT } from "../utils/env";
import { prisma } from "../repositories/prisma";

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
        const job = await fetchJobById(Number(id));
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
        const { auth } = req as Request & {
            auth: AuthorizedUserRequest;
        };

        const { technician, job }: { technician: Technician; job: Job } =
            req.body;

        const newJob = await addNewJob(job);

        const notifier = notifierFactory(
            technician.preferredContact,
            technician,
        );

        await notifier.send(
            `New Job Request from User ID ${auth.user.id}. Please review and accept the job: http://${HOST}:${PORT}/technician/${technician.id}/jobs.`,
        );

        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const jobStatusUpdate = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const { auth } = req as Request & {
            auth: AuthorizedTechnicianRequest;
        };
        const { jobId } = req.params;
        const { accept } = req.query;

        const updatedStatus: { [key: string]: string | undefined } = {
            true: "ACCEPTED",
            false: "DECLINED",
        };
        let queryStatus = updatedStatus[accept as string];
        if (!queryStatus) {
            res.status(400).json({ error: "Bad Request" });
            return;
        }

        const jobStatus = await prisma.jobStatus.create({
            data: {
                jobId: Number(jobId),
                status: queryStatus,
                message: `Technician #${auth.technician.id} ${queryStatus} the job.`,
            },
        });

        const user = await prisma.user.findFirst({
            where: {
                requests: { some: { jobs: { some: { id: Number(jobId) } } } },
            },
        });

        if (!!user) {
            const notifier = notifierFactory(user.preferredContact, user);
            await notifier.send(
                `Technician #${auth.technician.id} ${queryStatus} the job and is on their way.`,
            );
        }
        res.status(201).json(jobStatus);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const updateJob = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedJob = await modifyJob(Number(id), req.body);
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
        res.sendStatus(204).json({ message: "Removed succesfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function fetchAllJobs(): Promise<Job[]> {
    throw new Error("Method not implemented.");
}

async function fetchJobById(id: number): Promise<Job> {
    throw new Error("Method not implemented.");
}

async function addNewJob(jobData: Job): Promise<Job> {
    throw new Error("Method not implemented.");
}

async function modifyJob(id: number, jobData: Partial<Job>): Promise<boolean> {
    throw new Error("Method not implemented.");
}

async function removeJob(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
}
