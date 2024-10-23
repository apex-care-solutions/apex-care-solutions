import { Client } from "@prisma/client";
import { Request, Response } from "express";

export const getAllUsers = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const users = await fetchAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getUserById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const usersData = await fetchUserById(id);
        if (!usersData) {
            res.status(404).json({ error: "User not found" });
        }
        res.json(usersData);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedUser = await modifyUser(id, req.body);
        if (!updatedUser) {
            res.status(404).json({ error: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedUser = await removeUser(id);
        if (!deletedUser) {
            res.status(404).json({ error: "User not found" });
        }
        res.sendStatus(204).json({message: "Removed succesfully"});
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function fetchAllUsers(): Promise<Client[]> {
    throw new Error("");
}

async function fetchUserById(id: string): Promise<Client> {
    throw new Error("");
}

async function modifyUser(id: string, userData: any): Promise<boolean> {
    throw new Error("");
}

async function removeUser(id: string): Promise<boolean> {
    throw new Error("");
}
