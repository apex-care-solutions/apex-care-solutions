import { Service } from "@prisma/client";
import { Request, Response } from "express";

export const getAllServices = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const services = await fetchAllServices();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getServiceById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const servicesData = await fetchServiceById(id);
        if (!servicesData) {
            res.status(404).json({ error: "Service not found" });
        }
        res.json(servicesData);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createService = async (req: Request, res: Response): Promise<void> => {
    try {
        const newService = await addNewService(req.body);
        res.json(newService);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const updateService = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedService = await modifyService(id, req.body);
        if (!updatedService) {
            res.status(404).json({ error: "Service not found" });
        }
        res.json(updatedService);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const deleteService = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedService = await removeService(id);
        if (!deletedService) {
            res.status(404).json({ error: "Service not found" });
        }
        res.sendStatus(204).json({message: "Removed succesfully"});
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function fetchAllServices(): Promise<Service[]> {
    throw new Error("");
}

async function fetchServiceById(id: string): Promise<Service> {
    throw new Error("");
}

async function addNewService(serviceData: any): Promise<Service> {
    throw new Error("");
}

async function modifyService(id: string, serviceData: any): Promise<boolean> {
    throw new Error("");
}

async function removeService(id: string): Promise<boolean> {
    throw new Error("");
}
