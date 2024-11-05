"use client";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/presenter/components/ui/avatar";
import { Button } from "@/presenter/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/presenter/components/ui/dropdown-menu";
import { BadgeCheck, Bell, CreditCard, LogOut, Sparkles } from "lucide-react";
import { useSession } from "../context/auth-provider";
import { logoutUser } from "@/presenter/actions/auth-actions";
import Link from "next/link";

export function AccountDropdown() {
    const [user, setUser] = useSession();
    if (!user) return;

    async function handleSignOut() {
        let res = await logoutUser();
        setUser(undefined);
        if (res.redirect) window.location.href = res.redirect;
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="font-bold rounded-full border-primary border-[1px] hover:bg-muted hover:text-primary"
                >
                    <img src="/user.svg" alt="user" />
                    {user?.username}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarImage
                                src={user?.avatar || ""}
                                alt={user?.username}
                            />
                            <AvatarFallback className="rounded-lg">
                                {user?.username.toUpperCase()[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">
                                {user?.username}
                            </span>
                            <span className="truncate text-xs">
                                {user?.username}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href="/account/subscription">
                        <DropdownMenuItem>
                            <Sparkles />
                            Subscription
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href="/account">
                        <DropdownMenuItem>
                            <BadgeCheck />
                            Account
                        </DropdownMenuItem>
                    </Link>
                    <Link href="/account/billing">
                        <DropdownMenuItem>
                            <CreditCard />
                            Billing
                        </DropdownMenuItem>
                    </Link>
                    <Link href="/notifications">
                        <DropdownMenuItem>
                            <Bell />
                            Notifications
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="!bg-inherit hover:!bg-inherit hover:!text-destructive"
                >
                    <LogOut />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
