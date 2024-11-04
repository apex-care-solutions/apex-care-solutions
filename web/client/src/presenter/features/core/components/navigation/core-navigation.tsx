import { Route, Routes } from "react-router-dom";
import { Home } from "@/presenter/features/core";
import { LandingNav, Nav } from "@/components/layout/nav";
import { useSession } from "@/presenter/features/auth/context/auth-provider";
import { Landing } from "../../views/landing";
import { Footer } from "@/components/layout/footer";
import { JobHistoryView } from "@/presenter/features/job/views/job-history";
import { NotFound } from "../../views/not-found";
import { Account } from "../../views/account";

export function CoreNavigation() {
    const [user] = useSession();
    return (
        <div className="w-full flex flex-col gap-10 py-10">
            {user ? <Nav /> : <LandingNav />}
            <Routes>
                <Route path="/" element={user ? <Home /> : <Landing />} />

                <Route
                    path="/account"
                    element={user ? <Account /> : <NotFound />}
                />
                <Route
                    path="/history"
                    element={user ? <JobHistoryView /> : <NotFound />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}
