import { getAuthUser } from "@/presenter/actions/auth-actions";
import { HomeView, LandingView } from "@/presenter/features/core";
import TechnicianHomeView from "@/presenter/features/technician/views/technician-home-view";

export default async function RootView() {
    let user;
    try {
        let res = await getAuthUser();
        user = res.data;
    } catch {}
    return user ? (
        user.userType == "TECHNICIAN" ? (
            <TechnicianHomeView />
        ) : (
            <HomeView />
        )
    ) : (
        <LandingView />
    );
}
