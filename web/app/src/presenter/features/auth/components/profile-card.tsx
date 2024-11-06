"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { Button } from "@/presenter/components/ui/button";
import { useEffect, useState } from "react";
import { UserAuth, useSession } from "../context/auth-provider";
import { updateUserById } from "@/presenter/actions/account-actions";

export const ProfileCard = () => {
    const [username, setUsername] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [user, setUser] = useSession();

    useEffect(() => {
        if (user) {
            setUsername(String(user.username));
            setFirstName(String(user.firstName));
            setLastName(String(user.lastName));
        }
    }, [user]);

    if (!user) {
        return;
    }

    const handleConfirmClick = async () => {
        if (user) {
            setUser(
                (await updateUserById(String(user.id), {
                    firstName,
                    lastName,
                    username,
                })) as UserAuth,
            );
        }
    };

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
                            <p>{user.username}</p>
                        </div>
                        <form className="flex flex-col w-full mr-5">
                            <div className="flex flex-col m-5 w-full">
                                <p>Username</p>
                                <input
                                    type="text"
                                    className="bg-white w-full p-1"
                                    id="username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                                <p>First name</p>
                                <input
                                    type="text"
                                    className="bg-white w-full p-1"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                                <p>Last name</p>
                                <input
                                    type="text"
                                    className="bg-white w-full p-1"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
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
                    onClick={handleConfirmClick}
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
};
