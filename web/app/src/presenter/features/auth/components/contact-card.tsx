"use client";

import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { Button } from "@/presenter/components/ui/button";
import { useSession } from "../context/auth-provider";
import { UserAuth } from "../context/auth-provider";
import { updateUserById } from "@/presenter/actions/account-actions";

export const ContactCard = () => {
    const [email, setEmail] = useState<string>("");
    const [phone, setPhoneNumber] = useState<string>("");
    const [user, setUser] = useSession();

    useEffect(() => {
        if (user) {
            setEmail(String(user?.email));
            setPhoneNumber(String(user?.phone));
        }
    }, [user]);

    if (!user) {
        return;
    }

    const handleConfirmClick = async () => {
        try {
            if (user) {
                setUser(
                    (await updateUserById(String(user.id), {
                        email,
                        phone,
                    })) as UserAuth,
                );
            }
        } catch (error) {
            console.error("Error updating contact:", error);
        }
    };

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
                            type="email"
                            className="w-full p-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <p>Phone</p>
                        <input
                            type="tel"
                            className="w-full p-1"
                            value={phone}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button
                    size="default"
                    className="bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground"
                    onClick={handleConfirmClick}
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
};
