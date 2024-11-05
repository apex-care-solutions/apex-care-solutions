"use server";

import { Job, JobDetails, JobStatus } from "@/domain/models";
import { notifierFactory } from "@/lib/notify/notifier-factory";
import { HOST, PORT } from "@/utils/env";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { JWT_SECRET } from "@/utils/env";
import { createResponse } from "@/utils/api";
import { prisma } from "@/repository/database";
import { APIResponse } from "@/domain/api/api-response";

async function getUserIdFromToken() {
    const nextCookies = await cookies();
    const token = nextCookies.get("token")?.value;
    if (!token) return null;
    
    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return (payload as { id: number }).id;
}

export async function getAllJobs(): Promise<APIResponse<JobDetails[] | undefined>> {
    try {
        const userId = await getUserIdFromToken();
        if (!userId) return createResponse({status: "UNAUTHORIZED",error: "Not authenticated"}) as APIResponse<undefined>;

        const jobs = await prisma.job.findMany({
            where: { userId },
            include: {
                jobStatusUpdates: { include: { jobStatus: true } },
                chat: {
                    include: {
                        chatMessages: {
                            take: 1,
                            orderBy: { createdAt: "desc" },
                            include: { user: true },
                        },
                    },
                },
            },
        });

        return createResponse({status: "OK", data: jobs}) as APIResponse<JobDetails[]>;
    } catch (error) {
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string}) as APIResponse<undefined>;
    }
}

export async function getJobById(id: number) {
    try {
        const job = await prisma.job.findUnique({ where: { id } });
        if (!job) return createResponse({status: "NOT_FOUND", error: "Job not found"});

        return createResponse({status: "OK", data: job});
    } catch (error) {
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string});
    }
}

export async function createJob(jobData: Job) {
    try {
        const userId = await getUserIdFromToken();
        if (!userId) return createResponse({status: "UNAUTHORIZED",error: "Not authenticated"});

        if(!jobData.technicianId) return createResponse({status: "BAD_REQUEST",error: "Technician Not Assigned"});

        const user = await prisma.user.findFirst({
            where: {
                 technician: { id: jobData.technicianId } ,
            },
        });

        if(!user) return createResponse({status: "BAD_REQUEST",error: "Technician does not exist"});

        const newJob = await prisma.job.create({ data: jobData });

        const notifier = notifierFactory(user.preferredContactMethod, user);
        await notifier.send(`New Job Request. Please review: http://${HOST}:${PORT}/technician/${jobData.technicianId}/jobs.`);

        return createResponse({status: "CREATED", data: newJob});
    } catch (error) {
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string});
    }
}

export async function jobStatusUpdate(jobId: number, jobStatusId: number) {
    try {
        const userId = await getUserIdFromToken();
        if (!userId) return createResponse({status: "UNAUTHORIZED", error: "Not authenticated"});

        const jobStatusUpdate = await prisma.jobStatusUpdate.create({
            data: {
                jobId,
                jobStatusId,
            },
        });

        const user = await prisma.user.findFirst({
            where: {
                job: { some:  { id: jobId } },
            },
        });

        if (user) {
            const notifier = notifierFactory(user.preferredContactMethod, user);
            await notifier.send(`Technician has updated the job status to ${jobStatusId}.`);
        }

        return createResponse({status: "CREATED", data: jobStatusUpdate});
    } catch (error) {
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string});
    }
}

export async function updateJob(id: number, jobData: Partial<Job>) {
    try {
        const updatedJob = await prisma.job.update({
            where: { id },
            data: jobData,
        });

        if (!updatedJob) return createResponse({status: "NOT_FOUND", error: "Job not found"});

        return createResponse({status: "OK", data: updatedJob});
    } catch (error) {
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string});
    }
}

export async function deleteJob(id: number) {
    try {
        const deletedJob = await prisma.job.delete({ where: { id } });
        if (!deletedJob) return createResponse({status: "NOT_FOUND", error: "Job not found"});

        return createResponse({status: "OK"});
    } catch (error) {
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string});
    }
}

export async function getJobStatuses(): Promise<APIResponse<JobStatus[] | undefined>> {
    try {
        const statuses = await prisma.jobStatus.findMany();
        return createResponse({status: "OK",data: statuses}) as APIResponse<JobStatus[]>;
    } catch (error) {
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string}) as APIResponse<undefined>;
    }
}
