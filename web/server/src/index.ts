import express, { Application } from "express";
import dotenv from "dotenv";
import * as env from "./utils/env";
import { indexRouter } from "./routes";
import cors from "cors";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);

app.listen(env.PORT, () => {
    console.log(`Server listening at http://localhost:${env.PORT}`);
});
