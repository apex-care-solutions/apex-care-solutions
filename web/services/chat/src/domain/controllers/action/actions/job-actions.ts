import { Socket } from "socket.io";
import { ChatRepository } from "../../../../repository/apex-care/chat-repository";
import { ApexCareApi } from "../../../../service/apex-care/apex-care-api";
import { APEX_CARE_API_BASE_URL } from "../../../../utils/env";
import { AuthenticatedSocket } from "../../../../utils/middleware/authMiddleware";
import { Job, User } from "../../../models";
import { ChatActionResponse } from "../../../models/chat-action";

export function confirmJobActionsRouter(socket: AuthenticatedSocket, payload: ChatActionResponse<Job>){
    const {token, chatId, user} = socket as Socket & {user: User, chatId: string, token: string};
    const apexCareApi = new ApexCareApi(APEX_CARE_API_BASE_URL, { 'Authorization': `Bearer ${token}` })
    let chatRepository = new ChatRepository(apexCareApi)
    return({
    "Confirm": async () => {
        const jobRequest = await chatRepository.createJobForChat(chatId, {
            ...payload.data,
                userId: (user).id,
                chatId: Number(chatId),
                description: "",
            })
        socket.emit("requestCreated", JSON.stringify(jobRequest));
    },
    "Decline": async () => {
        socket.emit("action", undefined);
    }
} as const)}