import { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardFooter,
} from "@/presenter/components/ui/card";
import { Button } from "@/presenter/components/ui/button";

export function SafetySettings() {
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [loginAlerts, setLoginAlerts] = useState(true);
    const [sessionTimeout, setSessionTimeout] = useState("15 minutes");

    return (
        <Card className="w-full bg-neutral-100">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                    Safety Settings
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={twoFactorAuth}
                            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                            className="mr-2"
                        />
                        Enable Two-Factor Authentication (2FA)
                    </label>
                    <p className="text-gray-500 text-sm mt-1">
                        Adds an extra layer of security by requiring a second
                        form of verification.
                    </p>
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={loginAlerts}
                            onChange={() => setLoginAlerts(!loginAlerts)}
                            className="mr-2"
                        />
                        Receive Login Alerts
                    </label>
                    <p className="text-gray-500 text-sm mt-1">
                        Get notified when your account is accessed from a new
                        device.
                    </p>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">
                        Session Timeout
                    </label>
                    <select
                        value={sessionTimeout}
                        onChange={(e) => setSessionTimeout(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="5 minutes">5 minutes</option>
                        <option value="15 minutes">15 minutes</option>
                        <option value="30 minutes">30 minutes</option>
                        <option value="1 hour">1 hour</option>
                    </select>
                    <p className="text-gray-500 text-sm mt-1">
                        Automatically log out after a period of inactivity.
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    size="default"
                    className="w-full bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground"
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
}
