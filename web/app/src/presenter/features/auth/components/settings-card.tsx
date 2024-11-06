import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";

type SettingOption =
    | "account"
    | "privacy"
    | "safety"
    | "notifications"
    | "subscriptions"
    | "appearance";

type SettingsCardProps = {
    onSelectSetting: (setting: SettingOption) => void;
};

export const SettingsCard: React.FC<SettingsCardProps> = ({
    onSelectSetting,
}) => {
    return (
        <Card className="bg-neutral-100 h-full flex flex-col">
            <CardHeader>
                <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-col border-b-2 p-2">
                    <button
                        className="text-left"
                        onClick={() => onSelectSetting("account")}
                    >
                        Account
                    </button>
                    <button
                        className="text-left"
                        onClick={() => onSelectSetting("privacy")}
                    >
                        Privacy
                    </button>
                    <button
                        className="text-left"
                        onClick={() => onSelectSetting("safety")}
                    >
                        Safety
                    </button>
                    <button
                        className="text-left"
                        onClick={() => onSelectSetting("notifications")}
                    >
                        Notifications
                    </button>
                </div>
                <div className="flex flex-col border-b-2 p-2">
                    <button
                        className="text-left"
                        onClick={() => onSelectSetting("subscriptions")}
                    >
                        Subscriptions
                    </button>
                </div>
                <div className="flex flex-col p-2">
                    <button
                        className="text-left"
                        onClick={() => onSelectSetting("appearance")}
                    >
                        Appearance
                    </button>
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
