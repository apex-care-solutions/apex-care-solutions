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
        <Card className="bg-neutral-100 h-full flex flex-col">
            <CardHeader>
                <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-col border-b-2 p-2">
                    <Link to="/account">Account</Link>
                    <Link to="/account/privacy">Privacy</Link>
                    <Link to="/account/safety">Safety</Link>
                    <Link to="/account/notification">Notifications</Link>
                </div>
                <div className="flex flex-col border-b-2 p-2">
                    <Link to="/account/subscriptions">Subscriptions</Link>
                </div>
                <div className="flex flex-col p-2">
                    <Link to="/account/appearance">Appearance</Link>
                </div>
            </CardContent>
            <CardFooter className="flex">
                <p className="text-red-500 hover:underline cursor-pointer">Sign out</p>
            </CardFooter>
        </Card>
    );
};
