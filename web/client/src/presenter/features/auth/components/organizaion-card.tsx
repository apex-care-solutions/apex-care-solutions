import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const OrganizationCard = () => {
    return (
        <Card className="bg-neutral-100 border-none">
            <CardHeader>
                <CardTitle>Organization</CardTitle>
            </CardHeader>
            <CardContent className="flex w-full gap-4">
                <div className="flex flex-col basis-1/2">
                    <form className="w-full">
                        <div className="mb-2">
                            <p>Name</p>
                            <input type="text" className="w-full p-1" />
                        </div>
                        <div className="mb-2">
                            <p>Email</p>
                            <input type="text" className="w-full p-1" />
                        </div>
                        <div className="mb-2">
                            <p>Address</p>
                            <input type="text" className="w-full p-1" />
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center basis-1/2 bg-gray-100">
                    Google Maps
                </div>
            </CardContent>
            <CardFooter className="flex justify-end w-full">
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
