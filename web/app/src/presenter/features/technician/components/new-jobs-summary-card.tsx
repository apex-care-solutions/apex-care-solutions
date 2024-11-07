import { Badge } from "@/presenter/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { Job, JobStatus, JobStatusUpdate, User } from "@prisma/client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function ActiveJobsSummaryCard({
    jobs,
}: {
    jobs: (Job & {
        user: User;
        jobStatusUpdates: (JobStatusUpdate & { jobStatus: JobStatus })[];
    })[];
}) {
    return (
        <Card className="mb-8">
            <CardHeader className="flex justify-between items-center mb-4">
                <div>
                    <CardTitle className="text-2xl font-semibold">
                        Active Jobs
                    </CardTitle>
                    <Link
                        href="/active-jobs"
                        className="text-blue-600 hover:underline text-sm flex items-center"
                    >
                        See All <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                </div>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.slice(0, 3).map((job) => (
                    <Card key={job.id}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">
                                {job.serviceName}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-2">
                                {job.user.address}
                            </p>
                            <Badge
                                variant={
                                    job.jobStatusUpdates.slice(-1, -1)[0]
                                        .jobStatus.status === "In Progress"
                                        ? "default"
                                        : "secondary"
                                }
                            >
                                {
                                    job.jobStatusUpdates.slice(-1, -1)[0]
                                        .jobStatus.status
                                }
                            </Badge>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
    );
}
