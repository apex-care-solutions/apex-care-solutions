import { BrowserRouter as Router } from "react-router-dom";
import { LandingNav } from "./presenter/components/layout/nav";
import { CoreNavigation } from "./presenter/features/core";
import "@/globals.css";

export function App() {
    return (
        <main>
            <Router>
                <LandingNav />
                <CoreNavigation />
            </Router>
        </main>
    );
}
