import { Card } from "@/components/ui/card";
import { ProfileCard } from "../../auth/components/profile-card";
import { ContactCard } from "../../auth/components/contact-card";
import { OrganizationCard } from "../../auth/components/location-card";
import { SettingsCard } from "../../auth/components/settings-card";

export function Account() {
    return (
        <div className="flex gap-5">
            <Card className="flex flex-col basis-1/5">
                <SettingsCard/>
            </Card>
            <div className="flex flex-col justify-center basis-4/5">
                <Card>
                    <ProfileCard />
                    <ContactCard />
                    <OrganizationCard />
                </Card>
            </div>
        </div>
    );
}
