import { Request, Response, Router } from "express";
import { authRouter } from "./auth-routes";

export const indexRouter = Router();

indexRouter.use("/auth", authRouter);

indexRouter.get("/", async (req: Request, res: Response) => {
    res.send("APEX CARE SOLUTIONS API");
});
