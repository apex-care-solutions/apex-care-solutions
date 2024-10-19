import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import * as env from "./utils/env";

dotenv.config();

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("APEX CARE SOLUTIONS API");
});

app.listen(env.PORT, () => {
    console.log(`Server listeinng at http://localhost:${env.PORT}`);
});
