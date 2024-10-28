import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function Home() {
    return (
        <div>
            <div className="bg-muted">
                <div className="flex items-center justify-between m-5">
                    <div className="bg-black text-white p-4">#22</div>
                    <div className="flex justify-center bg-amber-500 text-white p-2 w-3/5 rounded">
                        In progress
                    </div>
                    <div>
                        <img src="/expand.svg" alt="expand" />
                    </div>
                </div>
            </div>
            <div className="bg-black flex items-center justify-center p-10">
                <img src="/promoNew.svg" alt="promo" />
            </div>
            <div className="flex">
                <div className="basis-4/5 p-4 bg-stone-100">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iusto corrupti temporibus quidem sapiente,
                        repellat excepturi odit illum, libero deserunt, commodi
                        quia ullam praesentium reiciendis? Quos officiis
                        explicabo soluta in aut!
                    </p>
                </div>
                <div className="basis-1/5 p-4 bg-stone-300">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam error, molestiae iure perferendis quas, provident
                        quos quis enim aut aliquam ullam adipisci expedita
                        maxime vero libero similique autem nobis vel!
                    </p>
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center mt-10 gap-2">
                    <p className="text-4xl font-bold">
                        BE PREPARED FOR EVERYTHING
                    </p>
                    <p>
                        Choose a plan to fit your needs from our expansive
                        selction of services and packages
                    </p>
                </div>
                <div className="flex justify-center mt-5">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-sm"
                    >
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/2 lg:basis-1/3"
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
            </div>
        </div>
    );
}
