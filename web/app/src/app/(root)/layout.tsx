import { getAuthUser } from "@/presenter/actions/auth-actions";
import { Footer } from "@/presenter/components/layout/footer";
import { LandingNav, Nav } from "@/presenter/components/layout/nav";
import {
    AuthProvider,
    UserAuth,
} from "@/presenter/features/auth/context/auth-provider";
import { ReactNode } from "react";

export default async function RootView({ children }: { children: ReactNode }) {
    let user: UserAuth | undefined;
    try {
        let res = await getAuthUser();
        user = res.data;
    } catch {}
    return (
        <main className="w-full max-w-[1440px] flex flex-col gap-20 py-10">
            <AuthProvider user={user}>
                {user ? <Nav /> : <LandingNav />}
                {children}
                <Footer />
            </AuthProvider>
        </main>
    );
}
