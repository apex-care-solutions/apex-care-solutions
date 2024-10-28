import { Button } from "@/presenter/components/ui/button";
import "/src/globals.css";
import { ArrowRight } from "lucide-react";
import { useSession } from "../../auth/context/auth-provider";

export function Home() {
    const [user] = useSession();
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-row max-md:flex-col gap-20">
                <div className="flex-1 flex flex-col justify-center gap-5">
                    <p className="text-6xl font-bold">
                        Your Equiptment, Our Care.
                    </p>
                    <p className="text-4xl text-muted-foreground">
                        Anytime, Every Time
                    </p>
                    <p className="font-bold text-muted-foreground">
                        Tell us what you need, and we'll be there, guaranteed!
                    </p>
                    <div className="flex gap-5">
                        <input
                            type="text"
                            className="flex-1 rounded-full px-5 bg-muted text-muted-foreground"
                        />
                        <Button
                            size="icon"
                            className="rounded-full bg-muted text-muted-foreground hover:text-primary-foreground hover:bg-muted-foreground"
                        >
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden">
                    <img
                        src="/assets/hero-img.png"
                        alt="hero"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}
