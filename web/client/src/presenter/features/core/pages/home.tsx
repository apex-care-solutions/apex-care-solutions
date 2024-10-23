import "/src/globals.css";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="flex flex-col">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}
