import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function LandingNav() {
    return (
        <nav className="flex">
            <div>
                <img src="/assets/logo/apex-care-minimal.svg" />
                <div>
                    <Link to="/info/business">Business</Link>
                    <Link to="/info/partners">Partners</Link>
                    <Link to="/info/about">About</Link>
                </div>
            </div>
            <div>
                <div>
                    <Link to="/help">Help</Link>
                </div>
                <div>
                    <Button>Log In</Button>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </nav>
    );
}
