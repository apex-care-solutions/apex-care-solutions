"use client";
import { logoutUser } from "@/presenter/actions/auth-actions";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { Separator } from "@/presenter/components/ui/separator";
import Link from "next/link";

export const SettingsCard: React.FC = () => {
    return (
        <Card className="bg-neutral-100 h-full flex flex-col">
            <CardHeader>
                <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-1">
                <div className="flex flex-col p-2 gap-1">
                    <Link href="/account" className="text-left">
                        Account
                    </Link>
                    <Link href="/account/notifications" className="text-left">
                        Notifications
                    </Link>
                </div>
                <Separator orientation="horizontal" />
                <div className="flex flex-col p-2">
                    <Link href="/account/subscriptions" className="text-left">
                        Subscriptions
                    </Link>
                </div>
                <Separator orientation="horizontal" />
                <div className="flex flex-col p-2">
                    <Link href="/account/appearance" className="text-left">
                        Appearance
                    </Link>
                </div>
            </CardContent>
            <CardFooter className="flex">
                <p
                    className="text-red-500 hover:underline cursor-pointer"
                    onClick={async () => {
                        let { redirect } = await logoutUser();
                        if (redirect) window.location.href = redirect;
                    }}
                >
                    Sign out
                </p>
            </CardFooter>
        </Card>
    );
};
