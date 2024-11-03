import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgeCheck, Bell, CreditCard, LogOut, Sparkles } from "lucide-react";
import { useSession } from "../context/auth-provider";
import { UserRepository } from "@/domain/repository";
import { apexCareApi } from "@/domain/data/services/apex-care-api/apex-care-api";
import { useNavigate } from "react-router-dom";

export function AccountDropdown() {
    const userRepository = new UserRepository(apexCareApi);
    const navigate = useNavigate();
    const [user, setUser] = useSession();
    if (!user) return;

    async function handleSignOut() {
        let res = await userRepository.signOut();
        setUser(undefined);
        if (res.redirect) navigate(res.redirect);
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="font-bold rounded-full border-border border-[1px]"
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
                                src={user.avatar || ""}
                                alt={user.username}
                            />
                            <AvatarFallback className="rounded-lg">
                                {user.username.toUpperCase()[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">
                                {user.username}
                            </span>
                            <span className="truncate text-xs">
                                {user.username}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Sparkles />
                        Subscription
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BadgeCheck />
                        Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCard />
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Bell />
                        Notifications
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
