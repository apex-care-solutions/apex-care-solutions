import { Route, Routes } from "react-router-dom";
import { LandingNav, Nav } from "@/components/layout/nav";
import { useSession } from "@/presenter/features/auth/context/auth-provider";
import { Footer } from "@/components/layout/footer";
import { SettingsCard } from "@/presenter/features/auth/components/settings-card";
import { PrivacyCard } from "@/presenter/features/auth/components/account-privacy";
import { Account } from "../../views/account";
import { SafetySettings } from "@/presenter/features/auth/components/account-safety";
import { NotificationSettings } from "@/presenter/features/auth/components/account-notifications";
import { SubscriptionSettings } from "@/presenter/features/auth/components/account-subscriptions";
import { AppearanceSettings } from "@/presenter/features/auth/components/account-appearance";

export function AccountNavigation() {
    const [user] = useSession();

    return (
        <div className="w-full flex flex-col gap-10 py-10">
            {user ? <Nav /> : <LandingNav />}
            <div className="flex gap-5">
                <div className="basis-1/5">
                    <SettingsCard />
                </div>
                <div className="basis-4/5">
                    <Routes>
                        <Route path="/" element={<Account/>}/>
                        <Route path="/privacy" element={<PrivacyCard />} />
                        <Route path="/safety" element={<SafetySettings/>}/>
                        <Route path="/notification" element={<NotificationSettings/>}/>
                        <Route path="/subscriptions" element={<SubscriptionSettings/>}/>
                        <Route path="/appearance" element={<AppearanceSettings/>}/>
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    );
}
