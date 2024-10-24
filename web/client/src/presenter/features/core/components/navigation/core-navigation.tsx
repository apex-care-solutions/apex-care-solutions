import { Route, Routes } from "react-router-dom";
import { Home } from "@/presenter/features/core";
import { LandingNav } from "@/presenter/components/layout/nav";

export function CoreNavigation() {
    return (
        <div className="w-full flex flex-col gap-20">
            <LandingNav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}
