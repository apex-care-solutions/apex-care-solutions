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
import { useEffect, useState } from "react";
import { useSession } from "../context/auth-provider";

export const ProfileCard = () => {
    const userRepository = new UserRepository(apexCareApi);
    const [username, setUsername] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [user] = useSession();

    useEffect(() => {
        if (user) {
            userRepository.findById(String(user.id)).then((userData) => {
                setUsername(userData.username);
                setFirstName(userData.firstName);
                setLastName(userData.lastName);
            });
        }
    }, [user]);

    if (!user) {
        return null;
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
                            <p>{user.username}</p>
                        </div>
                        <form className="flex flex-col w-full mr-5">
                            <div className="flex flex-col m-5 w-full">
                                <p>Username</p>
                                <input
                                    type="text"
                                    className="bg-white w-full p-2"
                                    id="username"
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                />
                                <p>First name</p>
                                <input
                                    type="text"
                                    className="bg-white w-full p-2"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                />
                                <p>Last name</p>
                                <input
                                    type="text"
                                    className="bg-white w-full p-2"
                                    id="lastName"
                                    value={lastName}
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
                    onClick={() => {
                        userRepository.update(String(user.id), {
                            username,
                            firstName,
                            lastName,
                        });
                    }}
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
};
