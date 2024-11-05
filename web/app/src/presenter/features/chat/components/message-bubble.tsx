import { Card, CardContent, CardHeader } from "@/presenter/components/ui/card";
import { formatDateTime } from "@/presenter/utils/date";
import { ReactNode } from "react";

export function MessageBubble({
    username,
    timestamp,
    children,
}: {
    username: string;
    timestamp?: Date;
    children: ReactNode;
}) {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex justify-between text-muted-foreground text-xs">
                    <p>{username}</p>
                    {timestamp && <p>{formatDateTime(timestamp)}</p>}
                </div>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}
