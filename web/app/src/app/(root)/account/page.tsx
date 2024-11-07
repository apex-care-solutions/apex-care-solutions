import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { ContactCard } from "@/presenter/features/auth/components/contact-card";
import { LocationCard } from "@/presenter/features/auth/components/location-card";
import { ProfileCard } from "@/presenter/features/auth/components/profile-card";
export default function Page() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Update Details</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <ProfileCard />
                <ContactCard />
                <LocationCard />
            </CardContent>
        </Card>
    );
}
