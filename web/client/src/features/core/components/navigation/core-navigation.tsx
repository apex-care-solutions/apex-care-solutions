import { Login, Register } from "@/features/auth";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "@/features/core";

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
