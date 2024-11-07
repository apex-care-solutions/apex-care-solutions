import { Card } from "@/presenter/components/ui/card";
import { JobStatusTrack } from "./job-status-track";
import { MessageBubble } from "../../chat/components/message-bubble";
import { TechnicianHoverCard } from "../../technician/components/technician-hover-card";
import { JobDetails, JobStatus, Technician } from "@/domain/models";
import { cn } from "@/presenter/lib/utils";
import { prisma } from "@/repository/database";
import { UserAuth } from "../../auth/context/auth-provider";
import { Search } from "lucide-react";

export async function JobCard({
    job,
    jobStatuses,
    control,
}: {
    job: JobDetails;
    jobStatuses: JobStatus[];
    control?: boolean;
}) {
    const complete = !!job.jobStatusUpdates.find((jsu) => jsu.jobStatusId == 6);
    const technician = await prisma.technician.findFirst({
        where: {
            jobs: {
                some: {
                    id: job.id,
                },
            },
        },
        include: {
            user: true,
        },
    });
    return (
        <Card className="flex flex-col p-5 gap-10">
            <div className="w-full transition duration-200 flex justify-between items-center">
                <div className="flex items-center gap-5">
                    {technician ? (
                        <TechnicianHoverCard
                            technician={{
                                ...(technician as Technician),
                                user: (
                                    technician as Technician & {
                                        user: UserAuth;
                                    }
                                ).user as UserAuth,
                            }}
                        />
                    ) : (
                        <Search className="h-10 w-10 rounded-full text-muted" />
                    )}
                    <p className="text-xl font-bold">{job.serviceName}</p>
                </div>
            </div>
            <JobStatusTrack
                jobStatuses={jobStatuses}
                jobStatusUpdates={job.jobStatusUpdates}
                control={control}
                job={job}
            />
            <div className="flex gap-10 items-stretch">
                <MessageBubble
                    username={
                        job.chat.chatMessages[0].user.username || "GPT Gerrie"
                    }
                    timestamp={job.chat.chatMessages[0].createdAt}
                >
                    {job.chat.chatMessages[0].message}
                </MessageBubble>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-5 items">
                        <div
                            className={cn(
                                "flex justify-center text-white p-2 rounded flex-1",
                                complete ? "bg-green-600" : "bg-accent",
                            )}
                        >
                            {complete ? "Completed" : "In Progress"}
                        </div>
                    </div>
                    <div className="flex gap-10 items-stretch">
                        <div className="flex flex-col justify-between">
                            <p>
                                <span className="font-bold">Urgency:</span>{" "}
                                {job.urgency}
                            </p>
                            <p>
                                <span className="font-bold">Type:</span> {}
                            </p>
                        </div>
                        <div className="bg-primary text-primary-foreground p-3 flex items-center">
                            #{job.id}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
