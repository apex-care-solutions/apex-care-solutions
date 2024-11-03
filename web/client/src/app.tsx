import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CoreNavigation } from "./presenter/features/core";
import "@/globals.css";
import { AuthNavigation } from "./presenter/features/core/components/navigation/auth-navigation";
import { AuthProvider } from "./presenter/features/auth/context/auth-provider";
import { AccountNavigation } from "./presenter/features/core/components/navigation/account-navigation";

export function App() {
    return (
        <main className="flex w-full items-center flex-col">
            <div className="w-full h-full flex items-center flex-col max-w-[1440px]">
                <AuthProvider>
                    <Router>
                        <Routes>
                            <Route
                                path="/auth/*"
                                element={<AuthNavigation />}
                            />
                            <Route path="/*" element={<CoreNavigation />} />
                            <Route path="/account/*" element={<AccountNavigation/>}/>
                        </Routes>
                    </Router>
                </AuthProvider>
            </div>
        </main>
    );
}
