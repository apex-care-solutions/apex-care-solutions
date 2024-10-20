import { Nav } from "./components/layout/nav";
import { CoreNavigation } from "./features/core";
import "@/globals.css";

export function App() {
    return (
        <main>
            <Nav />
            <CoreNavigation />
        </main>
    );
}
