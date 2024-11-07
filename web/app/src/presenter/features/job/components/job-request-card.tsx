"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { UserHoverCard } from "../../user/components/user-hover-card";
import { MessageBubble } from "../../chat/components/message-bubble";
import { Button } from "@/presenter/components/ui/button";
import { Handshake } from "lucide-react";
import { claimJob, JobRecursive } from "@/presenter/actions/job-actions";
import { cn } from "@/presenter/lib/utils";
import { useCallback } from "react";

export function JobRequestCard({ job }: { job: JobRecursive }) {
    const urgency = [
        { title: "Low", color: "text-green-800 bg-green-500" },
        { title: "Moderate", color: "text-yellow-700 bg-yellow-300" },
        { title: "Medium", color: "text-orange-700 bg-orange-300" },
        { title: "High", color: "text-red-700 bg-red-300" },
        { title: "Extreme", color: "text-red-900 bg-red-500" },
    ];

    const handleClaim = useCallback(() => {
        claimJob(job.id).then(({ data: updatedJob, redirect, error }) => {
            if (redirect) window.location.href = redirect;
        });
    }, [job]);

    return (
        <Card key={job.id} className="overflow-hidden">
            <div className={cn(urgency[job.urgency - 1].color, "p-2.5")}>
                {urgency[job.urgency - 1].title}
            </div>
            <CardHeader className="">
                <div className="flex justify-between w-full">
                    <UserHoverCard user={job.user} />
                    <CardTitle className="text-lg">{job.serviceName}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500 mb-2">{job.user.address}</p>
                <MessageBubble
                    timestamp={job.chat.chatMessages[0].createdAt}
                    username={job.chat.chatMessages[0].user.username}
                    oneline={true}
                >
                    {job.chat.chatMessages[0].message}
                </MessageBubble>
            </CardContent>
            <CardFooter>
                <Button className="font-bold" onClick={handleClaim}>
                    Claim
                    <Handshake />
                </Button>
            </CardFooter>
        </Card>
    );
}
