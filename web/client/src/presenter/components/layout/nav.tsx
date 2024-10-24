import { Link } from "react-router-dom";
import { Button } from "../ui/button";

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
