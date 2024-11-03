import { Request, Response } from "express";
import { prisma } from "../repositories/prisma";
import bcrypt from "bcrypt";
import { JWT_SECRET, SALT_ROUNDS } from "../utils/env";
import jwt from "jsonwebtoken";
import { ApexAPIResponse, createApexResponse } from "../utils/api";


export const registerUser = async (
    request: Request,
    response: Response,
): Promise<any> => {
    try {
        const { firstName, lastName, username, email, phone, password, confirmPassword } = request.body;
        if (password !== confirmPassword) return response.status(400).json({ error: "Passwords do not match" });
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const res = await prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                password: hashedPassword,
                phone,
                username,
                userType: "CUSTOMER",
            }
        });
        response.json(createApexResponse("OK", undefined, undefined, "/auth/login"));
    } catch (error) {
        console.error("Registration error:", error);
        response.status(400).json(createApexResponse("INTERNAL_SERVER_ERROR", undefined, error as string));
    }
};

export const loginUser = async (request: Request, response: Response): Promise<any> => {
    try {
        const { username, password } = request.body;
        const user = await prisma.user.findFirst({
            where: { username },
        });
        if (!user) return response.status(401).json({ error: "Invalid credentials" });
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return response.status(401).json({ error: "Invalid credentials" });
        }
        const { password: _, ...secureUser } = user;
        const token = jwt.sign(
            secureUser,
            JWT_SECRET,
        );
        response.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        response.json(createApexResponse("OK", secureUser, undefined, "/"));
    } catch (error) {
        console.error("Login error:", error);
        response.json(createApexResponse("INTERNAL_SERVER_ERROR", undefined, error as string));
    }
};

export const logoutUser = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        response.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        response.json(createApexResponse("OK",undefined, undefined, "/"));
    } catch (error) {
        console.error("Logout error:", error);
        response.json(createApexResponse("INTERNAL_SERVER_ERROR"));
    }
};

export const getUser = async (request: Request, response: Response): Promise<void> => {
    try {
        const token = request.cookies.token;
        if (!token) {
            response.json(createApexResponse("INTERNAL_SERVER_ERROR"));
            return;
        };
        const decoded = jwt.verify(token, JWT_SECRET);
        response.json(createApexResponse("OK",decoded));
    } catch (error) {
        console.error("Error retrieving user:", error);
        response.status(500).json({ error: "Failed to retrieve user" });
    }
};
