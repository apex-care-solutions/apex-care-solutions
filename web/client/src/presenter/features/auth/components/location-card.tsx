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

export function LocationCard() {
    const userRepository = new UserRepository(apexCareApi);
    const [address, setAddress] = useState<string>("");
    const [user] = useSession();

    useEffect(() => {
        if (user) {
            userRepository.findById(String(user.id)).then((userData) => {
                setAddress(userData.address)
            });
        }
    }, [user]);

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
                        className="w-full p-2"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                    />
                </form>
            </CardContent>
            <CardFooter className="flex justify-end w-full">
                <Button
                    size="default"
                    className="bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground"
                    onClick={(e) => {
                        userRepository.update(String(user.id), { address });
                    }}
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
}
