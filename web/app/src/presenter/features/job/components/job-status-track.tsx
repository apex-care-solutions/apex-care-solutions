"use client";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { JobStatus } from "@/domain/models/job-status";
import { JobStatusUpdate } from "@/domain/models/job-status-update";
import { cn } from "@/presenter/lib/utils";
import { jobStatusUpdate } from "@/presenter/actions/job-actions";
import { Job } from "@prisma/client";

export function JobStatusTrack({
    job,
    jobStatuses,
    jobStatusUpdates,
    control,
}: {
    job: Job;
    jobStatuses: JobStatus[];
    jobStatusUpdates: JobStatusUpdate[];
    control?: boolean;
}) {
    const [formattedDates, setFormattedDates] = useState<ReactNode[]>([]);
    const highestJobStatusUpdate = Math.max(
        ...jobStatusUpdates.map((jsu) => jsu.jobStatusId),
    );

    const highestJobStatus = Math.max(...jobStatuses.map((jsu) => jsu.id));

    const handleUpdate = useCallback(
        (jobStatusId: number) => {
            jobStatusUpdate(job.id, jobStatusId).then(({ redirect }) => {
                if (redirect) window.location.href = redirect;
            });
        },
        [job],
    );

    useEffect(() => {
        const dates = jobStatuses.map((status) => {
            const statusUpdate = jobStatusUpdates.find(
                (jsu) => jsu.jobStatusId === status.id,
            );
            return statusUpdate ? (
                new Date(statusUpdate.updatedAt)
                    .toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                    .replace(",", "")
            ) : control && highestJobStatusUpdate + 1 == status.id ? (
                <div
                    onClick={() => {
                        handleUpdate(status.id);
                    }}
                    className="text-accent font-bold hover:text-accent active:text-blue-800 select-none !cursor-pointer"
                >
                    Complete
                </div>
            ) : (
                "-"
            );
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
                        <div>{formattedDates[index] || "-"}</div>
                        <div
                            className={cn(
                                "w-3.5 h-3.5 border-2 rounded-full border-accent bg-primary-foreground",
                                highestJobStatus == highestJobStatusUpdate &&
                                    "bg-accent",
                                formattedDates[index] !== "-" &&
                                    status.id !== highestJobStatusUpdate &&
                                    "bg-accent",
                                formattedDates[index] === "-" &&
                                    "border-border",
                                status.id === highestJobStatusUpdate + 1 &&
                                    highestJobStatus !=
                                        highestJobStatusUpdate &&
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
