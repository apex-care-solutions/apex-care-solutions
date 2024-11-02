import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { CheckCheck } from "lucide-react";

export function MessageBubble() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex justify-between text-muted-foreground text-xs">
                    <p>You</p>
                    <p>24/10/09 13:04</p>
                </div>
            </CardHeader>
            <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardContent>
            <CardFooter className="flex justify-end text-xs text-muted-foreground">
                <p className="flex gap-1 items-center">
                    Read <CheckCheck className="h-5" />
                </p>
            </CardFooter>
        </Card>
    );
}
