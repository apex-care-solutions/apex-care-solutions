import { JobRequest } from "@prisma/client";
import { Request, Response } from "express";

export const getAllRequests = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const requests = await fetchAllRequests();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getRequestById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const requestData = await fetchRequestById(id);
        if (!requestData) {
            res.status(404).json({ error: "Request not found" });
        }
        res.json(requestData);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createRequest = async (req: Request, res: Response): Promise<void> => {
    try {
        const newRequest = await addNewRequest(req.body);
        res.json(newRequest);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const updateRequest = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedRequest = await modifyRequest(id, req.body);
        if (!updatedRequest) {
            res.status(404).json({ error: "Request not found" });
        }
        res.json(updatedRequest);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const deleteRequest = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedRequest = await removeRequest(id);
        if (!deletedRequest) {
            res.status(404).json({ error: "Request not found" });
        }
        res.sendStatus(204).json({message: "Removed succesfully"});
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function fetchAllRequests(): Promise<JobRequest[]> {
    throw new Error("");
}

async function fetchRequestById(id: string): Promise<JobRequest> {
    throw new Error("");
}

async function addNewRequest(requestData: any): Promise<JobRequest> {
    throw new Error("");
}

async function modifyRequest(id: string, requestData: any): Promise<boolean> {
    throw new Error("");
}

async function removeRequest(id: string): Promise<boolean> {
    throw new Error("");
}
