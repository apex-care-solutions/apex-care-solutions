import { Request, Response } from "express";
import { prisma } from "../repositories/prisma";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../utils/env";


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

        console.log(res)

        response.json({ message: "User registered successfully", user: res });
    } catch (error) {
        console.error("Registration error:", error);
        response.status(400).json({ error: "Registration failed" });
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
            response.status(401).json({ error: "Invalid credentials" });
        }

        response.json({ message: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        response.status(401).json({ error: "Invalid credentials" });
    }
};

export const logoutUser = async (
    request: Request,
    response: Response,
): Promise<void> => {
    try {
        response.json({ message: "Logout successful" });
    } catch (error) {
        response.json({ error: "Logout failed" });
    }
};

export const getUser = async(request: Request, response: Response) : Promise<void> => {
    try {
        response.json({ message: "Logout successful" });
    } catch (error) {
        response.json({ error: "Logout failed" });
    }
}