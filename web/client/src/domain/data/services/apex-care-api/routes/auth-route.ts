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
    "POST /auth/register": (url: string) =>
        API.route<boolean>({
            url,
            method: "POST",
            route: `/auth/register`,
        }),
    "POST /auth/signin": (url: string) =>
        API.route<UserAuth>({
            url,
            method: "POST",
            route: `/auth/signin`,
        }),
} as const;

export type AuthRoute = keyof typeof authRoutes;
