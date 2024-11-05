import { API } from "../../api";
import { UserAuth } from "@/presenter/features/auth/context/auth-provider";

export const authRoutes = {
    "GET /auth/me": (        
        url: string
    ) =>
        API.route<UserAuth>({
            url,
            method: "GET",
            route: `/auth/me`,
        }),
    "POST /auth/register": (url: string, body: RegisterData) =>
        API.route<boolean>({
            url,
            method: "POST",
            route: `/auth/register`,
            body,
            headers: {
                "Content-Type": "application/json",
            }
        }),
    "POST /auth/signin": (url: string, body: LoginData) =>
        API.route<UserAuth>({
            url,
            method: "POST",
            route: `/auth/signin`,
            body,
            headers: {
                "Content-Type": "application/json",
            }
        }),
    "POST /auth/signout": (url: string, body: LoginData) =>
        API.route<boolean>({
            url,
            method: "POST",
            route: `/auth/signout`,
            body,
            headers: {
                "Content-Type": "application/json",
            }
        }),
} as const;

export interface RegisterData {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface LoginData {
    username: string;
    password: string;
}

export type AuthRoute = keyof typeof authRoutes;
