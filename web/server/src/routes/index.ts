import { Request, Response, Router } from "express";

export const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.send("APEX CARE SOLUTIONS API");
});
