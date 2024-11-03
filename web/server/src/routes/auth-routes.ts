import { Router } from "express";
import {
    loginUser,
    registerUser,
    logoutUser,
    getUser
} from "../controllers/auth-controller";

export const authRouter = Router();

authRouter.post("/signin", loginUser);
authRouter.post("/register", registerUser);
authRouter.post("/signout", logoutUser);
authRouter.get("/me", getUser);