import { Button } from "@/presenter/components/ui/button";
import Link from "next/link";
import { getJobStatuses, getOpenJobs } from "@/presenter/actions/job-actions";
import { JobRequestCard } from "../../job/components/job-request-card";

export async function TechnicianRequestsView() {
    const { data: jobStatuses } = await getJobStatuses();
    const { data: jobs } = await getOpenJobs();

    if (!jobStatuses) return "ERROR";

    return (
        <div className="flex flex-col gap-5 flex-1">
            {jobs?.length ? (
                jobs
                    ?.slice(0, 3)
                    .map((job) => <JobRequestCard job={job} key={job.id} />)
            ) : (
                <div className="flex flex-col w-full justify-center items-center col-span-3 min-h-52 bg-muted gap-5 flex-1">
                    <p>
                        No requests for you at the current moment, add more
                        skills to your profile to recieve more requests.
                    </p>
                    <Link href="/account">
                        <Button size="sm">Go to account</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
