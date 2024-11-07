import { getAuthUser } from "@/presenter/actions/auth-actions";
import { Footer } from "@/presenter/components/layout/footer";
import { LandingNav, Nav } from "@/presenter/components/layout/nav";
import { AuthProvider } from "@/presenter/features/auth/context/auth-provider";
import { ReactNode } from "react";

export default async function RootView({ children }: { children: ReactNode }) {
    const { data: user } = await getAuthUser();
    return (
        <main className="w-full max-w-[1440px] flex flex-col gap-20 py-10">
            <AuthProvider user={user}>
                <div className="min-h-screen flex flex-col gap-20">
                    {user ? <Nav /> : <LandingNav />}
                    {children}
                </div>
                <Footer />
            </AuthProvider>
        </main>
    );
}
