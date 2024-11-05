import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import Link from "next/link";

export const SettingsCard = () => {
    return (
        <Card className="bg-neutral-100 h-full flex flex-col">
            <CardHeader>
                <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-col border-b-2 p-2">
                    <Link href="/account">Account</Link>
                    <Link href="/account/privacy">Privacy</Link>
                    <Link href="/account/safety">Safety</Link>
                    <Link href="/account/notification">Notifications</Link>
                </div>
                <div className="flex flex-col border-b-2 p-2">
                    <Link href="/account/subscriptions">Subscriptions</Link>
                </div>
                <div className="flex flex-col p-2">
                    <Link href="/account/appearance">Appearance</Link>
                </div>
            </CardContent>
            <CardFooter className="flex">
                <p className="text-red-500 hover:underline cursor-pointer">
                    Sign out
                </p>
            </CardFooter>
        </Card>
    );
};
