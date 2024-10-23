import { Router } from "express";
import {
    loginUser,
    registerUser,
    logoutUser,
} from "../controllers/auth-controller";

export const authRouter = Router();

authRouter.post("/auth", loginUser);

authRouter.post("/auth", registerUser);

authRouter.post("/auth", logoutUser);
