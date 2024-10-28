import { Route, Routes } from "react-router-dom";
import { Home } from "@/presenter/features/core";
import { LandingNav, Nav } from "@/components/layout/nav";
import { useSession } from "@/presenter/features/auth/context/auth-provider";
import { Landing } from "../../views/landing";
import { Footer } from "@/components/layout/footer";

export function CoreNavigation() {
    const [user] = useSession();
    return (
        <div className="w-full flex flex-col gap-20">
            {user ? <Nav /> : <LandingNav />}
            <Routes>
                <Route path="/" element={user ? <Home /> : <Landing />} />
            </Routes>
            <Footer />
        </div>
    );
}
