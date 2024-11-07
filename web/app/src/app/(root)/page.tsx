import { getAuthUser } from "@/presenter/actions/auth-actions";
import { HomeView, LandingView } from "@/presenter/features/core";
import TechnicianHomeView from "@/presenter/features/technician/views/technician-home-view";

export default async function RootView() {
    const { data: user } = await getAuthUser();
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
