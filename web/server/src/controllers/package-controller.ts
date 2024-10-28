import { Package } from "@prisma/client";
import { Request, Response } from "express";

export const getAllPackages = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const packages = await fetchAllPackages();
        res.json(packages);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getPackageById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const packageData = await fetchPackageById(id);
        if (!packageData) {
            res.status(404).json({ error: "package not found" });
        }
        res.json(packageData);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createPackage = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const newpackage = await addNewPackage(req.body);
        res.json(newpackage);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const updatePackage = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedpackage = await modifyPackage(id, req.body);
        if (!updatedpackage) {
            res.status(404).json({ error: "package not found" });
        }
        res.json(updatedpackage);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const deletePackage = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedpackage = await removePackage(id);
        if (!deletedpackage) {
            res.status(404).json({ error: "package not found" });
        }
        res.sendStatus(204).json({ message: "Removed succesfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function fetchAllPackages(): Promise<Package[]> {
    throw new Error("Method not implemented.");
}

async function fetchPackageById(id: string): Promise<Package> {
    throw new Error("Method not implemented.");
}

async function addNewPackage(packageData: any): Promise<Package> {
    throw new Error("Method not implemented.");
}

async function modifyPackage(id: string, packageData: any): Promise<boolean> {
    throw new Error("Method not implemented.");
}

async function removePackage(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
}
