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

export function LocationCard() {
    const [address, setAddress] = useState<string>("");
    const [user, setUser] = useSession();

    useEffect(() => {
        if (user) {
            setAddress(String(user?.address));
        }
    }, [user]);

    if (!user) {
        return;
    }

    const handleConfirmClick = async () => {
        try {
            if (user) {
                const updatedUser = (await updateUserById(String(user.id), {
                    address,
                })) as UserAuth;
                setUser(updatedUser);
            }
        } catch (error) {
            console.error("Error updating location:", error);
        }
    };

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
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </form>
            </CardContent>
            <CardFooter className="flex justify-end w-full">
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
}
