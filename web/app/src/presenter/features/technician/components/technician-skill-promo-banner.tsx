import { Button } from "@/presenter/components/ui/button";
import Image from "next/image";

export function TechnicianSkillPromoBanner() {
    return (
        <div className="relative items-stretch overflow-hidden grid grid-flow-row md:grid-cols-3 grid-cols-1 rounded-sm">
            <div className="bg-primary z-20 w-full h-full text-primary-foreground justify-between flex flex-col overflow-hidden rounded-none p-5 gap-5">
                <div className="flex flex-col gap-2.5">
                    <div>
                        <h1 className="text-5xl font-bold text-accent">
                            Upgrade your skills today
                        </h1>
                    </div>
                </div>
                <div>
                    <p className="text-lg font-bold">
                        New training courses available. Boost your expertise and
                        earn more!
                    </p>
                </div>
                <div className="flex">
                    <Button variant="secondary" className="font-bold">
                        Level Up
                    </Button>
                </div>
            </div>
            <div className="h-full w-full overflow-hidden col-span-2">
                <Image
                    src="/assets/upgrade-skills.png"
                    alt="upgrade skills"
                    height={500}
                    width={2000}
                    className="h-max"
                />
            </div>
        </div>
    );
}
