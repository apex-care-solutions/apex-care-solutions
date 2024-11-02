import { cn } from "@/presenter/lib/utils";

const jobStatuses = [
    {
        id: 1,
        status: "Request",
    },
    {
        id: 2,
        status: "Technician Notified",
    },
    {
        id: 3,
        status: "Technician Assigned",
    },
    {
        id: 4,
        status: "On Their Way",
    },
    {
        id: 5,
        status: "Taking Care",
    },
    {
        id: 6,
        status: "Complete",
    },
];

const jobStatusUpdates = [
    {
        jobStatusId: 1,
        createdAt: new Date("01-01-2024 07:10"),
    },
    {
        jobStatusId: 2,
        createdAt: new Date("01-01-2024 07:10"),
    },
    {
        jobStatusId: 3,
        createdAt: new Date("01-01-2024 07:10"),
    },
    {
        jobStatusId: 4,
        createdAt: new Date("01-01-2024 07:10"),
    },
];

export function JobStatusTrack() {
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
                                {statusUpdate?.createdAt.toLocaleDateString() ||
                                    "-"}
                            </p>
                            <div
                                className={cn(
                                    "w-3.5 h-3.5 border-2 rounded-full border-accent bg-primary-foreground",
                                    statusUpdate &&
                                        status.id != highestjobStatus &&
                                        "bg-accent",
                                    !statusUpdate && "border-border",
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
