import { Card, CardContent } from "@/presenter/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/presenter/components/ui/carousel";
import { FAQList } from "../components/faq-list";

export function HomeView() {
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
                    selction of services and packages
                </p>
            </div>
            <div className="flex justify-center mt-5">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/3 lg:basis-1/5"
                            >
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">
                                                {index + 1}
                                            </span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <FAQList />
        </div>
    );
}
