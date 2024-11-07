"use client";
import { Button } from "../ui/button";
import { useSession } from "@/presenter/features/auth/context/auth-provider";
import { AccountDropdown } from "@/presenter/features/auth/components/account-dropdown";
import { Badge } from "../ui/badge";
import {
    ArrowRight,
    BotMessageSquare,
    Hand,
    HandCoins,
    History,
    MapPin,
    Pin,
    PinIcon,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

export function LandingNav() {
    return (
        <nav className="flex justify-between font-bold text-sm">
            <div className="flex justify-center items-center gap-20">
                <img
                    src="/assets/logo/apex-care-minimal.svg"
                    className="h-10"
                />
                <div className="flex gap-10">
                    <Link href="/info/business">Business</Link>
                    <Link href="/info/partners">Partners</Link>
                    <Link href="/info/about">About</Link>
                </div>
            </div>
            <div className="flex items-center justify-center gap-10">
                <div>
                    <Link href="/help">Help</Link>
                </div>
                <div className="flex gap-5">
                    <Link href="/auth/login">
                        <Button variant="ghost" className="font-bold">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/auth/login">
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export function Nav() {
    const [user] = useSession();
    return (
        <nav className="flex justify-between font-bold text-sm gap-10">
            <div className="flex justify-center items-center gap-10 flex-1">
                <Link href="/">
                    <img
                        src="/assets/logo/apex-care-minimal.svg"
                        className="h-10"
                    />
                </Link>
                <div className="flex gap-10 flex-1">
                    <Link href="/account">
                        <div className="bg-black text-white px-5 p-2.5 text-ellipsis whitespace-nowrap flex gap-1">
                            <MapPin className="h-5" />
                            <div className="max-w-40 overflow-hidden text-ellipsis whitespace-nowrap flex gap-1 items-center">
                                {user?.address || "Add Location"}
                            </div>
                        </div>
                    </Link>
                    <div className="items-stretch gap-2.5 flex-1 hidden lg:flex">
                        <input
                            type="text"
                            placeholder="Start a conversation with our help desk..."
                            className="flex-1 rounded-full px-5 bg-muted text-muted-foreground max-w-full"
                        />
                        <Link href="">
                            <Button
                                size="icon"
                                className="rounded-full"
                                variant="secondary"
                            >
                                <ArrowRight />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5">
                <div className="flex gap-5">
                    <Link
                        href={
                            user?.userType == "CUSTOMER" ? "/chat" : "/requests"
                        }
                    >
                        <Button variant="outline" className="font-bold">
                            {user?.userType == "CUSTOMER" ? (
                                <>
                                    Chat
                                    <BotMessageSquare />
                                </>
                            ) : (
                                <>
                                    Requests
                                    <HandCoins />
                                </>
                            )}
                        </Button>
                    </Link>
                    <Link href="/jobs">
                        <Button variant="outline" className="font-bold">
                            Jobs
                            <History />
                        </Button>
                    </Link>
                </div>
                <Separator orientation="vertical" />
                <div className="flex gap-5">
                    <AccountDropdown />
                </div>
            </div>
        </nav>
    );
}

export function LandingNavBurger() {
    return (
        <nav className="flex justify-between p-5 font-bold text-sm">
            <div className="flex justify-center items-center gap-20">
                <img
                    src="/assets/logo/apex-care-minimal.svg"
                    className="h-10"
                />
            </div>
            <div className="flex items-center justify-center gap-10">
                <div className="flex gap-10">
                    <Link href="/info/business">Business</Link>
                    <Link href="/info/partners">Partners</Link>
                    <Link href="/info/about">About</Link>
                </div>
                <div>
                    <Link href="/help">Help</Link>
                </div>
                <div className="flex gap-5">
                    <Link href="/auth/login">
                        <Button variant="ghost" className="font-bold">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/auth/login">
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
