import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProfileCard = () => {
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
                                />
                                <p>Last name</p>
                                <input
                                    type="text"
                                    className="bg-white w-full p-1"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button
                    size="default"
                    className="bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground"
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
};
