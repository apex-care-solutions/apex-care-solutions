import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CoreNavigation } from "./presenter/features/core";
import "@/globals.css";
import { AuthNavigation } from "./presenter/features/core/components/navigation/auth-navigation";

export function App() {
    return (
        <main className="flex w-full items-center flex-col">
            <div className="w-full h-full flex items-center flex-col max-w-[1440px]">
                <Router>
                    <Routes>
                        <Route path="/auth/*" element={<AuthNavigation />} />
                        <Route path="/*" element={<CoreNavigation />} />
                    </Routes>
                </Router>
            </div>
        </main>
    );
}
