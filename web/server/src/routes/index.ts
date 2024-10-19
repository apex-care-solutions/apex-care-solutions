import { Request, Response, Router } from "express";
import { prisma } from "../repositories/prisma";

export const indexRouter = Router();

indexRouter.get("/", async (req: Request, res: Response) => {
    const jobs = await prisma.job.findMany();
    console.log(jobs);
    res.send("APEX CARE SOLUTIONS API");
});
