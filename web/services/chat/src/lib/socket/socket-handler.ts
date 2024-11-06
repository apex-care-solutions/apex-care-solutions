import { Server } from "socket.io";
import { AuthenticatedSocket } from "../../utils/middleware/authMiddleware";

export class SocketHandler{
    protected actions: {[key: string]: (data: any) => void} = {};
    protected defaultAction: (data?: any) => void = () => undefined;

    constructor(protected io: Server, protected socket: AuthenticatedSocket){}

    route(message: string){
        return this.defaultAction(message)
    }
}