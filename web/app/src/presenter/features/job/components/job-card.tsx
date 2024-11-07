import { Card } from "@/presenter/components/ui/card";
import { ArrowRight } from "lucide-react";
import { JobStatusTrack } from "./job-status-track";
import { Button } from "@/presenter/components/ui/button";
import { MessageBubble } from "../../chat/components/message-bubble";
import { TechnicianHoverCard } from "../../technician/components/technician-hover-card";
import { JobDetails, JobStatus } from "@/domain/models";
import Link from "next/link";
import { cn } from "@/presenter/lib/utils";

let technician: {
    id: number;
    username: string;
    createdAt: Date;
    title: string;
    description: string;
    averageRating: number;
} = {
    id: 1,
    username: "werries",
    title: "IT Technician",
    createdAt: new Date(),
    averageRating: 2.1,
    description: "IT Technician @ Entelect",
};

export function JobCard({
    job,
    jobStatuses,
    control,
}: {
    job: JobDetails;
    jobStatuses: JobStatus[];
    control?: boolean;
}) {
    const complete = !!(
        job.jobStatusUpdates.slice(-1)[0]?.jobStatus.status == "Complete"
    );

    return (
        <Card className="flex flex-col p-5 gap-10">
            <div className="w-full transition duration-200 flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <TechnicianHoverCard technician={technician} />
                    <p className="text-xl font-bold">Server Maintainance</p>
                </div>
                <Link href="/job-page">
                    <Button className="flex gap-1 items-center">
                        View Job
                        <ArrowRight className="h-5" />
                    </Button>
                </Link>
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
