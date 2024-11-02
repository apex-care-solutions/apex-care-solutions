import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useSession } from "@/presenter/features/auth/context/auth-provider";
import { AccountDropdown } from "@/presenter/features/auth/components/account-dropdown";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";

export function LandingNav() {
    return (
        <nav className="flex justify-between p-5 font-bold text-sm">
            <div className="flex justify-center items-center gap-20">
                <img
                    src="/assets/logo/apex-care-minimal.svg"
                    className="h-10"
                />
                <div className="flex gap-10">
                    <Link to="/info/business">Business</Link>
                    <Link to="/info/partners">Partners</Link>
                    <Link to="/info/about">About</Link>
                </div>
            </div>
            <div className="flex items-center justify-center gap-10">
                <div>
                    <Link to="/help">Help</Link>
                </div>
                <div className="flex gap-5">
                    <Link to="/auth/login">
                        <Button variant="ghost" className="font-bold">
                            Log In
                        </Button>
                    </Link>
                    <Link to="/auth/login">
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
        <nav className="flex justify-between p-5 font-bold text-sm gap-10">
            <div className="flex justify-center items-center gap-10 flex-1">
                <Link to="/">
                    <img
                        src="/assets/logo/apex-care-minimal.svg"
                        className="h-10"
                    />
                </Link>
                <div className="flex gap-10 flex-1">
                    <Badge className="bg-black text-white rounded-full px-5 p-2.5 text-ellipsis whitespace-nowrap overfl">
                        <div className="max-w-40 overflow-hidden text-ellipsis whitespace-nowrap">
                            {user?.address}
                        </div>
                    </Badge>
                    <div className="flex items-stretch gap-2.5 flex-1">
                        <input
                            type="text"
                            placeholder="Start a conversation with our help desk..."
                            className="flex-1 rounded-full px-5 bg-muted text-muted-foreground w-[600px] max-w-full"
                        />
                        <Link to="">
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
            <div className="flex items-center justify-center gap-10">
                <div>
                    <Link to="/history">
                        <Button variant="ghost" className="font-bold">
                            History
                            <img src="/history.svg" alt="history" />
                        </Button>
                    </Link>
                </div>
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
                    <Link to="/info/business">Business</Link>
                    <Link to="/info/partners">Partners</Link>
                    <Link to="/info/about">About</Link>
                </div>
                <div>
                    <Link to="/help">Help</Link>
                </div>
                <div className="flex gap-5">
                    <Link to="/auth/login">
                        <Button variant="ghost" className="font-bold">
                            Log In
                        </Button>
                    </Link>
                    <Link to="/auth/login">
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
