import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import { FAQList } from "../components/faq-list";
import { Button } from "@/presenter/components/ui/button";
import { cn } from "@/presenter/lib/utils";
import { prisma } from "@/repository/database";
import { getAuthUser } from "@/presenter/actions/auth-actions";

export async function HomeView() {
    const packages = await prisma.package.findMany();
    const { data: user } = await getAuthUser();
    const userSubscriptions = await prisma.subscription.findMany({
        where: {
            userId: user?.id,
        },
    });
    const maxSubscription = userSubscriptions.sort(
        (a, b) => a.userId - b.userId,
    )[0];
    const colors = ["shadow-green-200", "shadow-blue-200", "shadow-yellow-200"];
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col">
                <div className="bg-black flex items-center justify-center p-10">
                    <img src="/promoNew.svg" alt="promo" />
                </div>
                <div className="flex min-h-52 h-52">
                    <div className="flex-1 h-full p-4 bg-stone-200"></div>
                    <div className="flex-1 h-full p-4 bg-stone-100"></div>
                    <div className="flex-1 h-full p-4 bg-stone-300"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 gap-5">
                <p className="text-5xl font-bold text-primary/90">
                    BE PREPARED FOR EVERYTHING
                </p>
                <p className="font-bold text-xl text-muted-foreground text-center">
                    Choose a plan to fit your needs from our expansive <br />
                    selection of services and packages
                </p>
            </div>
            <div className="grid grid-flow-col justify-center mt-5 gap-2.5">
                {packages.map((item, index) => (
                    <Card
                        key={index}
                        className={cn(
                            "h-full flex flex-col",
                            colors[item.id - 1],
                            "shadow-sm hover:shadow-sm",
                        )}
                    >
                        <CardHeader className="flex items-center justify-center">
                            <div className="flex items-center justify-center">
                                <CardTitle>{item.name}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center flex-1">
                            <span className="font-semibold mt-2 text-muted-foreground flex gap-1">
                                <span className="text-md">R</span>
                                <span className="text-6xl">{item.price}</span>
                                <span className="text-md flex items-end">
                                    p/y
                                </span>
                            </span>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-5">
                            <CardDescription>
                                {item.description}
                            </CardDescription>
                            <Button
                                className="w-full font-bold"
                                disabled={maxSubscription?.id >= index}
                            >
                                {maxSubscription?.id >= index
                                    ? "Covered"
                                    : "Subscribe"}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <FAQList />
        </div>
    );
}
