"use client";

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
import { UserRepository } from "@/repository/database/user-repository";
import { apexCareApi } from "@/service/apex-care-api/apex-care-api";

export const ProfileCard = () => {
    const userRepository = new UserRepository(apexCareApi);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [user] = useSession();

    if (!user) {
        return;
    }

    return (
        <Card className="bg-neutral-100 border-none rounded-none">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col w-full">
                    <div className="flex gap-5 w-full items-center">
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src="/accountImage.jpg"
                                alt="UserImage"
                                className="rounded-full"
                            />
                            <p>Rory</p>
                        </div>
                        <form className="flex flex-col w-full mr-5">
                            <div className="flex flex-col m-5 w-full">
                                <p>First name</p>
                                <input
                                    type="text"
                                    className="bg-white w-full p-1"
                                    id="firstName"
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                />
                                <p>Last name</p>
                                <input
                                    type="text"
                                    className="bg-white w-full p-1"
                                    id="lastName"
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end pb-0">
                <Button
                    size="default"
                    className="bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground"
                    onSubmit={() => {
                        userRepository.update(user.id, { firstName, lastName });
                    }}
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
};
