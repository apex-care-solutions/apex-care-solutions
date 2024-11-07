import { Button } from "@/presenter/components/ui/button";
import Link from "next/link";
import {
    getJobStatuses,
    getTechnicianJobs,
} from "@/presenter/actions/job-actions";
import { JobCard } from "../../job/components/job-card";

export async function TechnicianJobsView() {
    const { data: jobStatuses } = await getJobStatuses();
    const { data: jobs } = await getTechnicianJobs();

    if (!jobStatuses) return "ERROR";

    return (
        <div className="flex flex-col gap-5">
            {jobs && jobs?.length > 0 ? (
                jobs?.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        jobStatuses={jobStatuses}
                        control
                    />
                ))
            ) : (
                <div className="w-full h-full flex flex-col justify-center items-center gap-10 min-h-[75vh] rounded-lg">
                    <p className="">You have yet to take care of someone</p>
                    <p className="">...</p>
                    <div className="flex flex-col gap-2.5 justify-center items-center">
                        <p className="text-muted-foreground text-sm">
                            Pick a user you want to help today.
                        </p>
                        <Link href={"/chat"}>
                            <Button>Requests</Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
