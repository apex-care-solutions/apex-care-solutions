import { Route, Routes } from "react-router-dom";
import { Login, Register } from "@/presenter/features/auth";

export function AuthNavigation() {
    return (
        <main>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </main>
    );
}
