import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ContactCard = () => {
    return (
        <Card className="bg-neutral-100 border-none rounded-none">
            <CardHeader>
                <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="flex gap-5 w-full">
                    <div className="w-full">
                        <p>Email</p>
                        <input type="text" className="w-full p-1" />
                    </div>
                    <div className="w-full">
                        <p>Phone</p>
                        <input type="text" className="w-full p-1" />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button size="default" className="bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground">
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
};

