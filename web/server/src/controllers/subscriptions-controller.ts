import { Subscription} from "@prisma/client";
import { Request, Response } from "express";

export const getAllSubscriptions = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const subscription = await fetchAllSubscriptions();
        res.json(subscription);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getSubscriptionById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;
    try {
        const subscriptionData = await fetchSubscriptionById(id);
        if (!subscriptionData) {
            res.status(404).json({ error: "Subscription not found" });
        }
        res.json(subscriptionData);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createSubscription = async (req: Request, res: Response): Promise<void> => {
    try {
        const newSubscription = await addNewSubscription(req.body);
        res.status(201).json(newSubscription);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const updateSubscription = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedTechnician = await modifySubscription(id, req.body);
        if (!updatedTechnician) {
            res.status(404).json({ error: "Subscription not found" });
        }
        res.json(updatedTechnician);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
};

export const deleteSubscription = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedSubscription = await removeSubscription(id);
        if (!deletedSubscription) {
            res.status(404).json({ error: "Subscription not found" });
        }
        res.sendStatus(204).json({message: "Removed succesfully"});
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function fetchAllSubscriptions(): Promise<Subscription[]> {
    throw new Error("");
}

async function fetchSubscriptionById(id: string): Promise<Subscription> {
    throw new Error("");
}

async function addNewSubscription(subscriptionData: any): Promise<Subscription> {
    throw new Error("");
}

async function modifySubscription(id: string, subscriptionData: any): Promise<boolean> {
    throw new Error("");
}

async function removeSubscription(id: string): Promise<boolean> {
    throw new Error("");
}
