"use client";
import { useState } from "react";
import { Card } from "@/presenter/components/ui/card";
import { ProfileCard } from "../../auth/components/profile-card";
import { ContactCard } from "../../auth/components/contact-card";
import { LocationCard } from "../../auth/components/location-card";
import { SettingsCard } from "../../auth/components/settings-card";
import { PrivacyCard } from "../../auth/components/account-privacy";
import { SafetyCard } from "../../auth/components/account-safety";
import { NotificationCard } from "../../auth/components/account-notifications";
import { SubscriptionCard } from "../../auth/components/account-subscriptions";
import { AppearanceCard } from "../../auth/components/account-appearance";

type SettingOption =
    | "account"
    | "privacy"
    | "safety"
    | "notifications"
    | "subscriptions"
    | "appearance";

export function AccountView() {
    const [selectedSetting, setSelectedSetting] =
        useState<SettingOption>("account");

    const rightCard = () => {
        switch (selectedSetting) {
            case "account":
                return (
                    <Card>
                        <ProfileCard />
                        <ContactCard />
                        <LocationCard />
                    </Card>
                );
            case "privacy":
                return <PrivacyCard />;
            case "safety":
                return <SafetyCard />;
            case "notifications":
                return <NotificationCard />;
            case "subscriptions":
                return <SubscriptionCard />;
            case "appearance":
                return <AppearanceCard />;
            default:
                <Card>
                    <ProfileCard />
                    <ContactCard />
                    <LocationCard />
                </Card>;
        }
    };

    return (
        <div className="flex gap-5">
            <Card className="basis-1/5">
                <SettingsCard onSelectSetting={setSelectedSetting} />
            </Card>
            <Card className="basis-4/5">{rightCard()}</Card>
        </div>
    );
}
