import { useEffect } from "react";
import { ApexCareApi } from "./domain/data/services/apex-care-api/apex-care-api";
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
