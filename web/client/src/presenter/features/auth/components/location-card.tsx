import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserRepository } from "@/domain/repository";
import { apexCareApi } from "@/domain/data/services/apex-care-api/apex-care-api";
import { useSession } from "../context/auth-provider";

export function OrganizationCard() {
    const userlocationRepo = new UserRepository(apexCareApi);
    const [location, setLocation] = useState<string>("");
    const [mapUrl, setMapUrl] = useState<string>("");

    const [user] = useSession();

    if (!user) {
        return;
    }
    useEffect(() => {}, [location]);

    return (
        <Card className="bg-neutral-100 border-none">
            <CardHeader>
                <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col w-full gap-4">
                <form className="w-full">
                    <p>Address</p>
                    <input
                        type="text"
                        className="w-full p-1"
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }}
                    />
                </form>
                <div className="flex items-center justify-center bg-gray-100">
                    <iframe
                        src={mapUrl}
                        width="600"
                        height="450"
                        loading="lazy"
                    ></iframe>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end w-full">
                <Button
                    size="default"
                    className="bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground"
                    onSubmit={(e) => {
                        userlocationRepo.update(user.id, {location});
                    }}
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
}
