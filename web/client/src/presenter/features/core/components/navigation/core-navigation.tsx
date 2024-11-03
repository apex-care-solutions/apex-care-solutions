import { Route, Routes } from "react-router-dom";
import { Home } from "@/presenter/features/core";
import { LandingNav, Nav } from "@/components/layout/nav";
import { useSession } from "@/presenter/features/auth/context/auth-provider";
import { Landing } from "../../views/landing";
import { Footer } from "@/components/layout/footer";
import { Account } from "../../views/account";
import { JobHistoryView } from "@/presenter/features/job/views/job-history";

export function CoreNavigation() {
    const [user] = useSession();
    return (
        <div className="w-full flex flex-col gap-10 py-10">
            {user ? <Nav /> : <LandingNav />}
            <Routes>
                <Route path="/" element={user ? <Home /> : <Landing />} />
                <Route path="/account" element={<Account />} />
                <Route path="/history" element={<JobHistoryView />} />
            </Routes>
            <Footer />
        </div>
    );
}
