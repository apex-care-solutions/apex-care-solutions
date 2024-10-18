import express from "express";
import dotenv from "dotenv";
import { PORT } from "./utils/env";

dotenv.config();

const app = express();

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
