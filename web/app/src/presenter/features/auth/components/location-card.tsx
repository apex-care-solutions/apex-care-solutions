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
import { UserRepository } from "@/repository/database/user-repository";
import { apexCareApi } from "@/service/apex-care-api/apex-care-api";

export function LocationCard() {
    const userlocationRepo = new UserRepository(apexCareApi);
    const [location, setLocation] = useState<string>("");

    const [user] = useSession();
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
            </CardContent>
            <CardFooter className="flex justify-end w-full">
                <Button
                    size="default"
                    className="bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground"
                    onSubmit={(e) => {
                        userlocationRepo.update(user.id, { location });
                    }}
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
}
