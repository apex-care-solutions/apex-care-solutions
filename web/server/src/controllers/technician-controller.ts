import { Technician } from "@prisma/client";
import { Request, Response } from "express";

export const getAllTechnicians = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const technician = await fetchAllTechnicians();
        res.json(technician);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getTechnicianById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const technicianData = await fetchTechnicianById(id);
        if (!technicianData) {
            res.status(404).json({ error: "Technician not found" });
        }
        res.json(technicianData);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createTechnician = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const newTechnician = await addNewTechnician(req.body);
        res.status(201).json(newTechnician);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const updateTechnician = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedTechnician = await modifyTechnician(id, req.body);
        if (!updatedTechnician) {
            res.status(404).json({ error: "Technician not found" });
        }
        res.json(updatedTechnician);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const deleteTechnician = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedTechnician = await removeTechnician(id);
        if (!deletedTechnician) {
            res.status(404).json({ error: "Technician not found" });
        }
        res.sendStatus(204).json({ message: "Removed succesfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function fetchAllTechnicians(): Promise<Technician[]> {
    throw new Error("Method not implemented.");
}

async function fetchTechnicianById(id: string): Promise<Technician> {
    throw new Error("Method not implemented.");
}

async function addNewTechnician(technicianData: any): Promise<Technician> {
    throw new Error("Method not implemented.");
}

async function modifyTechnician(
    id: string,
    technicianData: any,
): Promise<boolean> {
    throw new Error("Method not implemented.");
}

async function removeTechnician(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
}
