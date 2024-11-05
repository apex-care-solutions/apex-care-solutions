import { getAuthUser } from "@/presenter/actions/auth-actions";
import { HomeView, LandingView } from "@/presenter/features/core";

export default async function RootView() {
    let user;
    try {
        let res = await getAuthUser();
        user = res.data;
    } catch {}
    return user ? <HomeView /> : <LandingView />;
}
