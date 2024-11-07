"use client";
import { Card, CardContent, CardHeader } from "@/presenter/components/ui/card";
import { cn } from "@/presenter/lib/utils";
import { ReactNode, useEffect, useState } from "react";

export function MessageBubble({
    username,
    timestamp,
    children,
    oneline,
}: {
    username: string;
    timestamp?: Date;
    children: ReactNode;
    oneline?: boolean;
}) {
    const [formattedTimestamp, setFormattedTimestamp] = useState("");

    useEffect(() => {
        if (timestamp) {
            setFormattedTimestamp(
                timestamp.toLocaleString("en-GB", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            );
        }
    }, [timestamp]);

    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex justify-between text-muted-foreground text-xs">
                    <p>{username}</p>
                    {timestamp && <p>{formattedTimestamp}</p>}
                </div>
            </CardHeader>
            <CardContent>
                <div
                    className={cn(
                        oneline && "text-nowrap overflow-hidden text-ellipsis",
                    )}
                >
                    {" "}
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}
