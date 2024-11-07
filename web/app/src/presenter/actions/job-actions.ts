"use server";

import { Chat, ChatMessage, Job, JobDetails, JobStatus, JobStatusUpdate, Service, User } from "@/domain/models";
import { notifierFactory } from "@/lib/notify/notifier-factory";
import { HOST, PORT } from "@/utils/env";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { JWT_SECRET } from "@/utils/env";
import { createResponse } from "@/utils/api";
import { prisma } from "@/repository/database";
import { APIResponse } from "@/domain/api/api-response";
import { getAuthUser } from "./auth-actions";
import { revalidatePath } from "next/cache";

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

export type JobRecursive = (Job & { user: User; jobStatusUpdates: (JobStatusUpdate & { jobStatus: JobStatus })[], chat: Chat & {chatMessages: (ChatMessage & {user: User})[]}, service: Service})

export async function getOpenJobs(): Promise<APIResponse<JobRecursive[]| undefined>> { 
    try{
        const {data: user} = await getAuthUser();
        if (!user) return createResponse({status: "UNAUTHORIZED",error: "Not authenticated"}) as APIResponse<undefined>;
        
        const technician = await prisma.technician.findFirst({
            where: {
                userId: user?.id
            },
            include: {
                technicianServices: true
            }
        })
    
        const openJobs = await prisma.job.findMany({
            where: {
                AND: [
                    {
                        technician: {
                            is: null,
                        },
                    },
                    {
                        service: {
                            is: {
                                name: {
                                    in: technician?.technicianServices.map((service) => service.serviceName)
                                }
                            }
                        }
                    }
                ],
            },
            include: {
                user: true,
                jobStatusUpdates: {
                    include: {
                        jobStatus: true
                    }
                },
                chat: {
                    include: {
                        chatMessages: {
                            take: 1,
                            orderBy: {
                                createdAt: "desc"
                            },
                            include: {
                                user: true
                            },
                            where: {
                                userId: {
                                    not: {
                                        equals: 101
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    
        return createResponse({status: "OK", data: openJobs}) as APIResponse<JobRecursive[]>
    }catch(error){
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string}) as APIResponse<undefined>;
    }
} 

export async function claimJob(jobId: number): Promise<APIResponse<Job | undefined>>{
    try{
        const {data: user} = await getAuthUser();
        const technician = await prisma.technician.findFirst({
            where: {
                userId: user?.id
            },
            include: {
                technicianServices: true
            }
        })
    
        if(!technician) return createResponse({status: "FORBIDDEN",error: "User is not a technician."}) as APIResponse<undefined>;
    
        const job = await prisma.job.findFirst({
            where: {
                id: jobId
            }
        })
    
        if(job?.technicianId) return createResponse({status: "FORBIDDEN",error: "Job has already been claimed."}) as APIResponse<undefined>;
    
        let updatedJob = await prisma.job.update({
            where: {
                id: jobId
            },
            data: {
                technicianId: technician?.id,
                jobStatusUpdates: {
                    create: {
                        jobStatusId: 3
                    }
                }
            }
        })

        revalidatePath("/")
        revalidatePath("/jobs")

        return createResponse({status: "OK", data: updatedJob, redirect: "/jobs"}) as APIResponse<Job>
    }catch(error){
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string}) as APIResponse<undefined>;
    }
}

export async function ditchJob(jobId: number): Promise<APIResponse<Job | undefined>>{
    try{
        const {data: user} = await getAuthUser();
        const technician = await prisma.technician.findFirst({
            where: {
                userId: user?.id
            },
            include: {
                technicianServices: true
            }
        })
    
        if(!technician) return createResponse({status: "FORBIDDEN",error: "User is not a technician."}) as APIResponse<undefined>;
    
        const job = await prisma.job.findFirst({
            where: {
                id: jobId
            }
        })
    
        if(job?.technicianId) return createResponse({status: "FORBIDDEN",error: "Job has already been claimed."}) as APIResponse<undefined>;
    
        let updatedJob = await prisma.job.update({
            where: {
                id: jobId
            },
            data: {
                technicianId: technician?.id,
                jobStatusUpdates: {
                    create: {
                        jobStatusId: 2
                    }
                }
            }
        })

        revalidatePath("/")
        revalidatePath("/jobs")

        return createResponse({status: "OK", data: updatedJob, redirect: "/jobs"}) as APIResponse<Job>
    }catch(error){
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string}) as APIResponse<undefined>;
    }
}

export async function giveJobStatusUpdate(jobId: number, jobStatusId: number): Promise<APIResponse<Job | undefined>>{
    try{
        const {data: user} = await getAuthUser();
        const technician = await prisma.technician.findFirst({
            where: {
                userId: user?.id
            },
            include: {
                technicianServices: true
            }
        })
    
        if(!technician) return createResponse({status: "FORBIDDEN",error: "User is not a technician."}) as APIResponse<undefined>;
    
        const job = await prisma.job.findFirst({
            where: {
                id: jobId
            }
        })
    
        if(job?.technicianId != technician.id) return createResponse({status: "FORBIDDEN",error: "You are not that guy!"}) as APIResponse<undefined>;
    
        let updatedJob = await prisma.jobStatusUpdate.create({
            data: {
                jobId,
                jobStatusId
            }
        })

        revalidatePath("/")
        revalidatePath("/jobs")

        return createResponse({status: "OK", data: updatedJob, redirect: "/"}) as APIResponse<Job>
    }catch(error){
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string}) as APIResponse<undefined>;
    }
}


export async function getTechnicianJobs(){
    try{
        const {data: user} = await getAuthUser();
        if (!user) return createResponse({status: "UNAUTHORIZED",error: "Not authenticated"}) as APIResponse<undefined>;
        
        const technician = await prisma.technician.findFirst({
            where: {
                userId: user?.id
            },
            include: {
                technicianServices: true
            }
        })

        if(!technician) return createResponse({status: "FORBIDDEN",error: "User is not a technician."}) as APIResponse<undefined>;
    
        const technicianJobs = await prisma.job.findMany({
            where: {
                technicianId: technician?.id
            },
            orderBy: {
                jobStatusUpdates: {
                    _count: "asc"
                }
            },
            include: {
                user: true,
                jobStatusUpdates: {
                    include: {
                        jobStatus: true
                    }
                },
                chat: {
                    include: {
                        chatMessages: {
                            take: 1,
                            orderBy: {
                                createdAt: "desc"
                            },
                            include: {
                                user: true
                            },
                            where: {
                                userId: {
                                    not: {
                                        equals: 101
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    
        return createResponse({status: "OK", data: technicianJobs}) as APIResponse<JobRecursive[]>
    }catch(error){
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string}) as APIResponse<undefined>;
    }
}

export async function removeTechnician(jobId: number){
    try{
        const {data: user} = await getAuthUser();
        if (!user) return createResponse({status: "UNAUTHORIZED",error: "Not authenticated"}) as APIResponse<undefined>;
        
        const technician = await prisma.technician.findFirst({
            where: {
                userId: user?.id
            },
            include: {
                technicianServices: true
            }
        })

        const job = await prisma.job.findFirst({
            where: {
                id: jobId
            }
        })

        if(!(user.id == job?.userId || technician?.id == job?.technicianId)) return createResponse({status: "FORBIDDEN",error: "User is not a authorized."}) as APIResponse<undefined>;

        const updatedJob = await prisma.job.update({
            where: {
                id: jobId
            },
            data: {
                technicianId: undefined,
                jobStatusUpdates: {
                    deleteMany: {
                        jobStatusId: {
                            gt: 2
                        }
                    }
                }
            }
        })
    
        return createResponse({status: "OK", data: updatedJob}) as APIResponse<JobRecursive[]>
    }catch(error){
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string}) as APIResponse<undefined>;
    }
}

export async function escalateUrgency(jobId: number){
    try{
        const {data: user} = await getAuthUser();
        if (!user) return createResponse({status: "UNAUTHORIZED",error: "Not authenticated"}) as APIResponse<undefined>;

        const job = await prisma.job.findFirst({
            where: {
                id: jobId
            }
        })

        if(!(user.id == job?.userId)) return createResponse({status: "FORBIDDEN",error: "User is not a authorized."}) as APIResponse<undefined>;

        let newUrgency = job.urgency + 1;

        if(newUrgency > 5) return createResponse({status: "BAD_REQUEST",error: "Unable to raise passed 5."}) as APIResponse<undefined>;

        const updatedJob = await prisma.job.update({
            where: {
                id: jobId
            },
            data: {
                urgency: newUrgency
            }
        })
    
        return createResponse({status: "OK", data: updatedJob}) as APIResponse<JobRecursive[]>
    }catch(error){
        return createResponse({status: "INTERNAL_SERVER_ERROR",error: error as string}) as APIResponse<undefined>;
    }
}