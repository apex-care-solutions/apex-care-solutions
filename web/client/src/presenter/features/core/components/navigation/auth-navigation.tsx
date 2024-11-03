import { Route, Routes } from "react-router-dom";
import { AuthContainer, Login, Register } from "@/presenter/features/auth";

export function AuthNavigation() {
    return (
        <main>
            <AuthContainer>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AuthContainer>
        </main>
    );
}
