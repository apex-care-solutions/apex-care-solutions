import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useSession } from "@/presenter/features/auth/context/auth-provider";
import { AccountDropdown } from "@/presenter/features/auth/components/account-dropdown";

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
        <nav className="flex justify-between p-5 font-bold text-sm">
            <div className="flex justify-center items-center gap-20">
                <img
                    src="/assets/logo/apex-care-minimal.svg"
                    className="h-10"
                />
                <div className="flex gap-10">
                    <div className="flex-1 bg-black text-white rounded-full px-5 p-1">
                        {user?.address}
                    </div>
                    <input
                        type="text"
                        placeholder="Start a conversation with our help desk..."
                        className="flex-1 rounded-full px-5 bg-muted text-muted-foreground w-[600px] max-w-full"
                    />
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
