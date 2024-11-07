import { ChevronRight } from "lucide-react";
import { TechnicianSkillPromoBanner } from "../components/technician-skill-promo-banner";
import {
    getJobStatuses,
    getOpenJobs,
    getTechnicianJobs,
} from "@/presenter/actions/job-actions";
import Link from "next/link";
import { JobRequestCard } from "../../job/components/job-request-card";
import { JobCard } from "../../job/components/job-card";
import { JobDetails } from "@/domain/models";
import { Button } from "@/presenter/components/ui/button";

export default async function TechnicianHomeView() {
    const { data: openJobs } = await getOpenJobs();
    const { data: technicianJobs } = await getTechnicianJobs();
    const { data: jobStatuses } = await getJobStatuses();

    return (
        <div className="min-h-screen flex flex-col gap-10">
            <TechnicianSkillPromoBanner />

            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Active Jobs</h2>
                <Link
                    href="/active-jobs"
                    className="hover:underline text-sm flex items-center"
                >
                    See All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </div>
            {technicianJobs?.length ? (
                technicianJobs
                    ?.slice(-1)
                    .map(
                        (job) =>
                            jobStatuses && (
                                <JobCard
                                    key={job.id}
                                    job={job as JobDetails}
                                    jobStatuses={jobStatuses}
                                    control
                                />
                            ),
                    )
            ) : (
                <div className="flex flex-col w-full justify-center items-center col-span-3 min-h-52 bg-muted gap-5">
                    <p>
                        You do not have any active jobs, go checkout some of the
                        requests to start making some money.
                    </p>
                    <Link href="/requests">
                        <Button size="sm">Go to requests</Button>
                    </Link>
                </div>
            )}

            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">New Job Requests</h2>
                <Link
                    href="/job-requests"
                    className="hover:underline text-sm flex items-center"
                >
                    See All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {openJobs?.length ? (
                    openJobs
                        ?.slice(0, 3)
                        .map((job) => <JobRequestCard job={job} key={job.id} />)
                ) : (
                    <div className="flex flex-col w-full justify-center items-center col-span-3 min-h-52 bg-muted gap-5">
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
        </div>
    );
}
