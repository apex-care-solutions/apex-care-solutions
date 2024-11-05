import { JobCard } from "../components/job-card";
import { Button } from "@/presenter/components/ui/button";
import Link from "next/link";
import { getAllJobs, getJobStatuses } from "@/presenter/actions/job-actions";

export async function JobsView() {
    const { data: jobStatuses } = await getJobStatuses();
    const { data: jobs } = await getAllJobs();

    if (!jobStatuses) return "ERROR";

    return (
        <div className="flex flex-col gap-5">
            {jobs && jobs?.length > 0 ? (
                jobs?.map((job, i) => (
                    <JobCard job={job} jobStatuses={jobStatuses} />
                ))
            ) : (
                <div className="w-full h-full flex flex-col justify-center items-center gap-10 min-h-[75vh] rounded-lg">
                    <p className="">
                        You have yet to allow us to take care of you
                    </p>
                    <p className="">...</p>
                    <div className="flex flex-col gap-2.5 justify-center items-center">
                        <p className="text-muted-foreground text-sm">
                            Start a chat with our virtual agents.
                        </p>
                        <Link href={"/chat"}>
                            <Button>Start Chat</Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
