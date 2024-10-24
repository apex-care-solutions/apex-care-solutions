import { useEffect } from "react";
import { ApexCareApi } from "./domain/data/services/apex-care-api/apex-care-api";
import { LandingNav } from "./presenter/components/layout/nav";
import { CoreNavigation } from "./presenter/features/core";
import "@/globals.css";

export async function getJobReq(){
    const apexCareApi = new ApexCareApi("http://localhost:3000", {
        Authorization: "Bearer",
    });
    let res = await apexCareApi.request("GET /users/:id", {}, {})
}

export function App() {
    const apexCareApi = new ApexCareApi("http://localhost:3000", {
        Authorization: "Bearer",
    });

    useEffect(() => {
        apexCareApi.request("GET /job-requests/:id", ).then(res => );
    }, []);
    return (
        <main>
            <LandingNav />
            <CoreNavigation />
        </main>
    );
}
