"use client";
import { Button } from "@/presenter/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { cn } from "@/presenter/lib/utils";
import { Package } from "@prisma/client";

export function SubscriptionCard({
    subPackage,
    disabled,
}: {
    subPackage: Package;
    disabled: boolean;
}) {
    const colors = ["shadow-green-200", "shadow-blue-200", "shadow-yellow-200"];
    return (
        <Card
            className={cn(
                "h-full flex flex-col",
                colors[subPackage.id - 1],
                "shadow-sm hover:shadow-sm",
            )}
        >
            <CardHeader className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <CardTitle>{subPackage.name}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center flex-1">
                <span className="font-semibold mt-2 text-muted-foreground flex gap-1">
                    <span className="text-md">R</span>
                    <span className="text-6xl">{subPackage.price}</span>
                    <span className="text-md flex items-end">p/y</span>
                </span>
            </CardContent>
            <CardFooter className="flex flex-col gap-5">
                <CardDescription>{subPackage.description}</CardDescription>
                <Button className="w-full font-bold" disabled={disabled}>
                    {disabled ? "Covered" : "Subscribe"}
                </Button>
            </CardFooter>
        </Card>
    );
}
