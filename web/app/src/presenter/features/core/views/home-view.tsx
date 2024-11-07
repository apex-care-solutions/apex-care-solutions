// import { Card, CardContent } from "@/presenter/components/ui/card";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/presenter/components/ui/carousel";
// import { FAQList } from "../components/faq-list";

// export function HomeView() {
//     return (
//         <div className="flex flex-col gap-10">
//             <div className="flex flex-col">
//                 <div className="bg-black flex items-center justify-center p-10">
//                     <img src="/promoNew.svg" alt="promo" />
//                 </div>
//                 <div className="flex min-h-52 h-52">
//                     <div className="flex-1 h-full p-4 bg-stone-200"></div>
//                     <div className="flex-1 h-full p-4 bg-stone-100"></div>
//                     <div className="flex-1 h-full p-4 bg-stone-300"></div>
//                 </div>
//             </div>
//             <div className="flex flex-col justify-center items-center mt-10 gap-5">
//                 <p className="text-5xl font-bold text-primary/90">
//                     BE PREPARED FOR EVERYTHING
//                 </p>
//                 <p className="font-bold text-xl text-muted-foreground text-center">
//                     Choose a plan to fit your needs from our expansive <br />
//                     selction of services and packages
//                 </p>
//             </div>
//             <div className="flex justify-center mt-5">
//                 <Carousel
//                     opts={{
//                         align: "start",
//                     }}
//                     className="w-full"
//                 >
//                     <CarouselContent>
//                         {Array.from({ length: 10 }).map((_, index) => (
//                             <CarouselItem
//                                 key={index}
//                                 className="md:basis-1/3 lg:basis-1/5"
//                             >
//                                 <div className="p-1">
//                                     <Card>
//                                         <CardContent className="flex aspect-square items-center justify-center p-6">
//                                             <span className="text-3xl font-semibold">
//                                                 {index + 1}
//                                             </span>
//                                         </CardContent>
//                                     </Card>
//                                 </div>
//                             </CarouselItem>
//                         ))}
//                     </CarouselContent>
//                     <CarouselPrevious />
//                     <CarouselNext />
//                 </Carousel>
//             </div>
//             <FAQList />
//         </div>
//     );
// }

// =====================================================================================
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/presenter/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/presenter/components/ui/carousel";
import { FAQList } from "../components/faq-list";
import { Button } from "@/presenter/components/ui/button";

const carouselItems = [
    {
        title: "Basic Home Support",
        price: "1500",
        description:
            "Includes: house keeping, window cleaning, lawn mowing, gardening.",
    },
    {
        title: "Home Maintenance",
        price: "4000",
        description:
            "Includes: deep cleaning, repainting of entire home, premium gardening services, pool cleaning.",
    },
    {
        title: "Home & Health Care",
        price: "2200",
        description:
            "Includes: house keeping, lawn mowing, gardening, routine health checks, medication management, basic nursing services.",
    },
    {
        title: "Specialized Health Care",
        price: "2600",
        description:
            "Includes: skilled nursing services, chronic disease management, post-surgical care, physical therapy sessions.",
    },
    {
        title: "24/7 Home & Health",
        price: "5000",
        description:
            "Includes: on-call emergency healthcare services, daily cleaning, laundry services, basic nursing services.",
    },
    {
        title: "Core Home Maintenance",
        price: "5000",
        description: "Includes: electrical, plumbing and mechanical support.",
    },
    {
        title: "24/7 Core Home Maintenance",
        price: "7200",
        description:
            "Includes: on-call electrical, plumbing and mechanical support.",
    },
    {
        title: "Lifestyle Wellness",
        price: "3000",
        description:
            "Includes: grocery shopping, meal planning, meal prepping, nutritional planning,",
    },
    {
        title: "Deep Clean & Fumigation",
        price: "3500",
        description:
            "Includes: house keeping, window cleaning, laundry services, and a fumigation.",
    },
];

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
                    selection of services and packages
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
                        {carouselItems.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/3 lg:basis-1/3 h-full"
                            >
                                <Card className="h-full flex flex-col">
                                    <CardHeader className="flex items-center justify-center">
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col items-center justify-center flex-1">
                                        <span className="font-semibold mt-2 text-muted-foreground flex gap-1">
                                            <span className="text-md">R</span>
                                            <span className="text-6xl">
                                                {item.price}
                                            </span>
                                            <span className="text-md flex items-end">
                                                p/y
                                            </span>
                                        </span>
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-5">
                                        <CardDescription>
                                            {item.description}
                                        </CardDescription>
                                        <Button className="w-full font-bold">
                                            Subscribe
                                        </Button>
                                    </CardFooter>
                                </Card>
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
