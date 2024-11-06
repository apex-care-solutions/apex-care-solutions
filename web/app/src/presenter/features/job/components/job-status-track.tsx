"use client";
import { useEffect, useState } from "react";
import { JobStatus } from "@/domain/models/job-status";
import { JobStatusUpdate } from "@/domain/models/job-status-update";
import { cn } from "@/presenter/lib/utils";

export function JobStatusTrack({
    jobStatuses,
    jobStatusUpdates,
}: {
    jobStatuses: JobStatus[];
    jobStatusUpdates: JobStatusUpdate[];
}) {
    const [formattedDates, setFormattedDates] = useState<string[]>([]);
    const highestJobStatus = Math.max(
        ...jobStatusUpdates.map((jsu) => jsu.jobStatusId),
    );

    useEffect(() => {
        const dates = jobStatuses.map((status) => {
            const statusUpdate = jobStatusUpdates.find(
                (jsu) => jsu.jobStatusId === status.id,
            );
            return statusUpdate
                ? new Date(statusUpdate.updatedAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                  })
                : "-";
        });
        setFormattedDates(dates);
    }, [jobStatuses, jobStatusUpdates]);

    return (
        <div className="w-full flex relative items-center">
            <hr className="h-1.5 w-full bg-muted-foreground/30 border-none absolute z-0" />
            <div className="flex relative z-10 justify-between w-full">
                {jobStatuses.map((status, index) => (
                    <div
                        key={status.id}
                        className="flex flex-col items-center gap-2.5 text-xs"
                    >
                        <p>{formattedDates[index]}</p>
                        <div
                            className={cn(
                                "w-3.5 h-3.5 border-2 rounded-full border-accent bg-primary-foreground",
                                formattedDates[index] !== "-" &&
                                    status.id !== highestJobStatus &&
                                    "bg-accent",
                                formattedDates[index] === "-" &&
                                    "border-border",
                                status.id === highestJobStatus &&
                                    "transition-all animate-pulse-accent",
                            )}
                        ></div>
                        <p>{status.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
