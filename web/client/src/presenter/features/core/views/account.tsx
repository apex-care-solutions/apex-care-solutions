import { Card } from "@/components/ui/card";
import { ProfileCard } from "../../auth/components/profile-card";
import { ContactCard } from "../../auth/components/contact-card";
import { LocationCard } from "../../auth/components/location-card";

export function Account() {
    return (
        <div>
            <Card>
                <ProfileCard />
                <ContactCard />
                <LocationCard />
            </Card>
        </div>
        
    );
}
