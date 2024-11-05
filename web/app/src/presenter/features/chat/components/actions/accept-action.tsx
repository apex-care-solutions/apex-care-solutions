import { Button } from "@/presenter/components/ui/button";
import { Socket } from "socket.io-client";

export function AcceptAction({
    socket,
    jobType,
    urgency,
}: {
    socket: Socket;
    jobType: string;
    urgency: string;
}) {
    return (
        <div className="flex items-center justify-between gap-5 rounded-lg">
            <div className="font-bold flex flex-col gap-1">
                <div className="text-xs">
                    {urgency
                        .split("_")
                        .map((u) => u[0] + u.toLocaleLowerCase().slice(1))
                        .join(" ")}
                </div>
                <div>
                    {jobType
                        .split("_")
                        .map((j) => j[0] + j.toLocaleLowerCase().slice(1))
                        .join(" ")}
                </div>
            </div>
            <div className="flex gap-2.5">
                <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-600/90"
                    onClick={() => {
                        socket.emit(
                            "action",
                            JSON.stringify({
                                action: "confirmCreateRequest",
                                data: {
                                    jobType,
                                    urgency,
                                },
                            }),
                        );
                    }}
                >
                    Confirm
                </Button>
                <Button
                    size="sm"
                    className="bg-destructive hover:bg-destructive/90"
                    onClick={() => {
                        socket.emit(
                            "action",
                            JSON.stringify({ action: "declineCreateRequest" }),
                        );
                    }}
                >
                    Decline
                </Button>
            </div>
        </div>
    );
}
