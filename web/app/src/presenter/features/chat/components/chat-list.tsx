import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { ChatPreview } from "./chat-preview";

export function ChatList() {
    return (
        <Card>
            <CardHeader>
                <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
                <ChatPreview />
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
}
