import { Login, Register } from "@/presenter/features/auth";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "@/presenter/features/core";

export function CoreNavigation() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}
