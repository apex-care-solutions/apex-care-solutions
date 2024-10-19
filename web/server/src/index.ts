import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import * as env from "./utils/env";

dotenv.config();

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Express & TypeScript Server");
});

app.listen(env.PORT, () => {
    console.log(`Server listening at http://localhost:${env.PORT}`);
});
