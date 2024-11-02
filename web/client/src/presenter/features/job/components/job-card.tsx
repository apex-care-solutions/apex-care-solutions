import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { ArrowRight, CheckCheck } from "lucide-react";
import { JobStatusTrack } from "./job-status-track";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageBubble } from "../../message/components/message-bubble";

export function JobCard() {
    return (
        <Card className="flex flex-col p-5 gap-10">
            <div className="w-full transition duration-200 flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <div className="flex flex-col justify-center items-center gap-1">
                        <Avatar className="h-10 w-10 rounded-full">
                            <AvatarImage src={""} alt={""} />
                            <AvatarFallback className="h-10 w-10">
                                W
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <p className="text-xl font-bold">Server Maintainance</p>
                </div>
                <Link to="/job-page">
                    <Button className="flex gap-1 items-center">
                        View Job
                        <ArrowRight className="h-5" />
                    </Button>
                </Link>
            </div>
            <JobStatusTrack />
            <div className="flex gap-10 items-stretch">
                <MessageBubble />
                <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-5 items">
                        <div className="flex justify-center bg-accent text-white p-2 rounded flex-1">
                            In Progress
                        </div>
                    </div>
                    <div className="flex gap-10 items-stretch">
                        <div className="flex flex-col justify-between">
                            <p>
                                <span className="font-bold">Estimated:</span> 3
                                Days
                            </p>
                            <p>
                                <span className="font-bold">Type:</span>{" "}
                                Maintenance
                            </p>
                        </div>
                        <div className="bg-primary text-primary-foreground p-3 flex items-center">
                            #22
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
