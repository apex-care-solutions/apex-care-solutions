import { Server } from "socket.io";
import { confirmJobActionsRouter } from "./actions/job-actions";
import { SocketHandler } from "../../../lib/socket/socket-handler";
import { ChatActionResponse } from "../../models/chat-action";
import { Job } from "../../models";
import { AuthenticatedSocket } from "../../../utils/middleware/authMiddleware";

export class ActionHandler extends SocketHandler{    
    protected actions: {[key: string]: (payload: ChatActionResponse<any>) => () => Promise<void>} = {
        "confirmJob": (payload: ChatActionResponse<Job>) => confirmJobActionsRouter(this.socket, payload)[payload.option as "Confirm" | "Decline"]
    } as const;

    constructor(io: Server, socket: AuthenticatedSocket){
        super(io, socket)
        this.route = async (message: string) => {
            const jsonPayload = JSON.parse(message) as ChatActionResponse<any>;
            const { action, data, option } = jsonPayload;
            let func = this.actions[action](jsonPayload)
            if(func) return func();
        }
    }
}