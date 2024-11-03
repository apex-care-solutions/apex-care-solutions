import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PrivacyCard() {
    const [serviceUpdates, setServiceUpdates] = useState(true);
    const [maintenanceLogs, setMaintenanceLogs] = useState(false);
    const [dataVisibility, setDataVisibility] = useState("technicians");

    return (
        <div className="bg-neutral-100 p-3">
            <h2 className="text-2xl font-semibold mb-4">Privacy Settings</h2>

            <Card className="w-full bg-white mb-3">
                <CardHeader>
                    <CardTitle>Service Updates Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={serviceUpdates}
                            onChange={() => setServiceUpdates(!serviceUpdates)}
                            className="mr-2"
                        />
                        Receive notifications for service updates
                    </label>
                    <p className="text-gray-500 text-sm mt-1">
                        Get alerts about upcoming maintenance and service reminders.
                    </p>
                </CardContent>
            </Card>
            <Card className="w-full bg-white mb-3">
                <CardHeader>
                    <CardTitle>Share Maintenance Logs</CardTitle>
                </CardHeader>
                <CardContent>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={maintenanceLogs}
                            onChange={() => setMaintenanceLogs(!maintenanceLogs)}
                            className="mr-2"
                        />
                        Share maintenance logs with service providers
                    </label>
                    <p className="text-gray-500 text-sm mt-1">
                        Allow technicians to view maintenance logs to improve service quality.
                    </p>
                </CardContent>
            </Card>
            <Card className="w-full bg-white mb-3">
                <CardHeader>
                    <CardTitle>Data Visibility</CardTitle>
                </CardHeader>
                <CardContent>
                    <select
                        value={dataVisibility}
                        onChange={(e) => setDataVisibility(e.target.value)}
                        className="w-full border rounded-md p-2 bg-gray"
                    >
                        <option value="technicians">Technicians Only</option>
                        <option value="admin">Admin Only</option>
                        <option value="public">Public (limited)</option>
                    </select>
                    <p className="text-gray-500 text-sm mt-1">
                        Control who can access your maintenance and service history.
                    </p>
                </CardContent>
            </Card>
            <Card className="w-full bg-white mb-3">
                <CardFooter className="pt-4 flex w-full">
                <Button size="default" className="bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground w-full">
                    Confirm
                </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
