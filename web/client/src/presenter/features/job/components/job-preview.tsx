import { Card } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import { JobStatusTrack } from "./job-status-track";

const statuses = [
    {
        timestamp: new Date("09-10-2024T13:04"),
        status: "Request",
    },
    {
        timestamp: new Date("09-10-2024T13:04"),
        status: "Request",
    },
    {
        timestamp: new Date("09-10-2024T13:04"),
        status: "Request",
    },
    {
        timestamp: new Date("09-10-2024T13:04"),
        status: "Request",
    },
];

export function JobPreview() {
    return (
        <Card className="flex flex-col p-5 gap-10">
            <JobStatusTrack statuses={statuses} />
            <div className="flex items-center justify-between gap-5 items">
                <div className="bg-black text-white p-5">#22</div>
                <div className="flex justify-center bg-amber-500 text-white p-2 rounded flex-1">
                    In Progress
                </div>
                <div className="bg-muted p-5 rounded-lg text-muted-foreground flex items-center justify-center">
                    <SquareArrowOutUpRight />
                </div>
            </div>
        </Card>
    );
}
