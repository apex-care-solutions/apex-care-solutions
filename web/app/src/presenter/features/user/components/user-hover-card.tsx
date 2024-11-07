import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/presenter/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/presenter/components/ui/hover-card";
import { User } from "@prisma/client";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function UserHoverCard({ user }: { user: User }) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="flex flex-col justify-center items-center gap-1 select-none">
                    <Avatar className="h-10 w-10 rounded-full">
                        <AvatarImage src={""} alt={""} />
                        <AvatarFallback className="h-10 w-10">
                            {user.username.toUpperCase()[0]}
                        </AvatarFallback>
                    </Avatar>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>
                            {user.username.toUpperCase()[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 flex-1">
                        <div className="flex justify-between">
                            <Link href={`/technician/${user.id}/profile`}>
                                <h4 className="text-sm font-semibold">
                                    @{user.username}
                                </h4>
                            </Link>
                        </div>
                        <p className="text-sm">{user.address}</p>
                        <div className="flex items-center pt-2">
                            <Calendar className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-muted-foreground flex gap-1">
                                Joined{" "}
                                {user.createdAt.toLocaleString("en-GB", {
                                    year: "numeric",
                                    month: "long",
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
