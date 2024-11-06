"use client";

import { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardFooter,
} from "@/presenter/components/ui/card";
import { Button } from "@/presenter/components/ui/button";

export function NotificationCard() {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(true);

    return (
        <Card className="w-full bg-neutral-100 h-full">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                    Notification Settings
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={() =>
                                setEmailNotifications(!emailNotifications)
                            }
                            className="mr-2"
                        />
                        Receive Email Notifications
                    </label>
                    <p className="text-gray-500 text-sm mt-1">
                        Get updates and alerts via email for your account
                        activities.
                    </p>
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={smsNotifications}
                            onChange={() =>
                                setSmsNotifications(!smsNotifications)
                            }
                            className="mr-2"
                        />
                        Receive SMS Notifications
                    </label>
                    <p className="text-gray-500 text-sm mt-1">
                        Get notified through SMS for important updates and
                        alerts.
                    </p>
                </div>

                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={pushNotifications}
                            onChange={() =>
                                setPushNotifications(!pushNotifications)
                            }
                            className="mr-2"
                        />
                        Enable Push Notifications
                    </label>
                    <p className="text-gray-500 text-sm mt-1">
                        Receive real-time alerts directly to your device.
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    size="default"
                    className="w-full bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground mt-5"
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
}
