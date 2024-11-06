import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import { ALLOWED_ORIGIN, HOST, PORT } from "./utils/env";
import { SocketServer } from "./lib/socket/socket-server";

dotenv.config();

const app: Application = express();
const socketServer = new SocketServer(app)

app.use(cors({
    origin: ALLOWED_ORIGIN,
    credentials: true,
}));

app.use(cookieParser());

socketServer.initialize();

socketServer.httpServer.listen(PORT, HOST, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
