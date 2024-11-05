"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { JWT_SECRET } from "@/utils/env";
import { createResponse } from "@/utils/api";
import { User } from "@/domain/models";
import { UserRepository } from "@/repository/database/user-repository";
import { APIResponse } from "@/domain/api/api-response";
import { UserAuth } from "../features/auth/context/auth-provider";
import { NextRequest } from "next/server";
import { hashPassword, verifyPassword } from "@/lib/crypt";

export async function registerUser(user: User) {
    try {
        const userRepository = new UserRepository();
        const hashedPassword = await hashPassword(user.password);
        await userRepository.create({
                ...user,
                password: hashedPassword,
                userType: "CUSTOMER",
        });
        return createResponse({status: "OK", redirect: "/auth/login"}) as APIResponse<undefined>;
    } catch (e) {
        return createResponse({status:"INTERNAL_SERVER_ERROR",  error: e as string}) as APIResponse<undefined>;
    }
}

export async function loginUser({username, password}:{username: string, password: string}):Promise<APIResponse<UserAuth | undefined>>  {
    try {
        const userRepository = new UserRepository();
        const user = await userRepository.findByUsername(username);
        if (!user || !(await verifyPassword(password, user.password))) {
            return createResponse({status: "UNAUTHORIZED", error: "Invalid credentials"}) as APIResponse<undefined>;
        }

        const { password: _, ...secureUser } = user;

        const token = await new SignJWT(secureUser)
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("2h")
            .sign(new TextEncoder().encode(JWT_SECRET));

        const nextCookies = await cookies();
        nextCookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        return createResponse<UserAuth>({status: "OK", data: secureUser, redirect: "/"}) as APIResponse<UserAuth>;
    } catch (e) {
        console.error("Login error:", e);
        return createResponse({status: "INTERNAL_SERVER_ERROR", error: e as string}) as APIResponse<undefined>;
    }
}

export async function logoutUser() {
    try {
        const nextCookies = await cookies();
        nextCookies.delete("token");

        return createResponse({status: "OK", redirect: "/auth/login"});
    } catch (e) {
        console.error("Logout error:", e);
        return createResponse({status: "INTERNAL_SERVER_ERROR", error: e as string});
    }
}

export async function getAuthUser() {
    try {
        const nextCookies = await cookies();
        const token = nextCookies.get("token")?.value;
        const user = authenticateToken(token);
        return createResponse({status: "OK", data: user});
    } catch (e) {
        console.error("Get user error:", e);
        return createResponse({status: "INTERNAL_SERVER_ERROR", error: e as string});
    }
}

export async function authenticateRequest(request: NextRequest) {
    try {
        let authHeader = request.headers.get("Authentication");
        let token = authHeader?.split("Bearer ")[1];
        const user = authenticateToken(token);
        return createResponse({status: "OK", data: user});
    } catch (e) {
        console.error("Get user error:", e);
        return createResponse({status: "INTERNAL_SERVER_ERROR", error: e as string});
    }
}

export async function authenticateToken(token: string | undefined) {
    try {
        if (!token)  return createResponse({status: "UNAUTHORIZED", error: "Not authenticated"});
        const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        return payload
    } catch (e) {
        return undefined;
    }
}
