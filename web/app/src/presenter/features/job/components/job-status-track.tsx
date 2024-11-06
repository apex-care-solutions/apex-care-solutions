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
    let highestjobStatus = Math.max(
        ...jobStatusUpdates.map((jsu) => jsu.jobStatusId),
    );
    return (
        <div className="w-full flex relative items-center">
            <hr className="h-1.5 w-full bg-muted-foreground/30 border-none absolute z-0" />
            <div className="flex relative z-10 justify-between w-full">
                {jobStatuses.map((status) => {
                    let statusUpdate = jobStatusUpdates.find(
                        (jsu) => jsu.jobStatusId == status.id,
                    );

                    return (
                        <div className="flex flex-col items-center gap-2.5 text-xs">
                            <p>
                                {statusUpdate
                                    ? new Date(statusUpdate?.updatedAt)
                                    : "-"}
                            </p>
                            <div
                                className={cn(
                                    "w-3.5 h-3.5 border-2 rounded-full border-accent bg-primary-foreground",
                                    statusUpdate &&
                                        status.id != highestjobStatus &&
                                        "bg-accent",
                                    !statusUpdate && "border-border",
                                    status.id == highestjobStatus &&
                                        "transition-all animate-pulse-accent",
                                )}
                            ></div>
                            <p>{status.status}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
