import { LandingNav } from "./presenter/components/layout/nav";
import { CoreNavigation } from "./presenter/features/core";
import "@/globals.css";

export function App() {
    return (
        <main>
            <LandingNav />
            <CoreNavigation />
        </main>
    );
}
