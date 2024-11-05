import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { Button } from "@/presenter/components/ui/button";
import { useState } from "react";
import { useSession } from "../context/auth-provider";
import { UserRepository } from "@/domain/repository";
import { apexCareApi } from "@/domain/data/services/apex-care-api/apex-care-api";

export const ContactCard = () => {
    const userRepository = new UserRepository(apexCareApi);
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [user] = useSession();

    if (!user) {
        return;
    }

    return (
        <Card className="bg-neutral-100 border-none rounded-none">
            <CardHeader>
                <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="flex gap-5 w-full">
                    <div className="w-full">
                        <p>Email</p>
                        <input
                            type="text"
                            className="w-full p-1"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="w-full">
                        <p>Phone</p>
                        <input
                            type="text"
                            className="w-full p-1"
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button
                    size="default"
                    className="bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground"
                    onSubmit={() => {
                        userRepository.update(user.id, { email, phoneNumber });
                    }}
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
};
