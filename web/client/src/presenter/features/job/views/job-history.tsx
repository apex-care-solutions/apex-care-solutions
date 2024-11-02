import { JobCard } from "../components/job-card";

export function JobHistoryView() {
    return (
        <div className="flex flex-col gap-10">
            {Array.from(Array(5)).map((_, i) => (
                <JobCard />
            ))}
        </div>
    );
}
