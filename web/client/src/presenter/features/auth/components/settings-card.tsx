import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export const SettingsCard = () => {
    return (
        <Card className="bg-neutral-100 border-none rounded-none h-full flex flex-col">
            <CardHeader>
                <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-col border-b-2 p-2">
                    <Link to="/account/profile">Profile</Link>
                    <Link to="/account">Account</Link>
                    <Link to="/account/privacy">Privacy</Link>
                    <Link to="/account/safety">Safety</Link>
                    <Link to="/account/notification">Notifications</Link>
                </div>
                <div className="flex flex-col border-b-2 p-2">
                    <Link to="/account/subscriptions">Subscriptions</Link>
                    <Link to="/account/requests">Requests</Link>
                    <Link to="/account/feedback">Feedback</Link>
                </div>
                <div className="flex flex-col p-2">
                    <Link to="/account/appearance">Appearance</Link>
                </div>
            </CardContent>
            <CardFooter className="flex">
                <Button
                    size="default"
                    className="bg-red-600 text-white hover:text-primary-foreground hover:bg-muted-foreground"
                >
                    Sign out
                </Button>
            </CardFooter>
        </Card>
    );
};
