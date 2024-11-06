import { Server, Socket } from "socket.io";
import { SocketHandler } from "../../../lib/socket/socket-handler";
import { ChatAction } from "../../models/chat-action";
import { ChatMessage, Job, User } from "../../models";
import { AuthenticatedSocket } from "../../../utils/middleware/authMiddleware";
import { ApexCareApi } from "../../../service/apex-care/apex-care-api";
import { ChatRepository } from "../../../repository/apex-care/chat-repository";
import { ServiceRepository } from "../../../repository/apex-care/service-repository";
import { APEX_CARE_API_BASE_URL } from "../../../utils/env";
import { classifyAndRespond } from "../../../service/openai";

export class ChatMessageHandler extends SocketHandler{    
    protected io: Server;
    protected socket: AuthenticatedSocket;

    constructor(io: Server, socket: AuthenticatedSocket){
        super(io, socket)
        this.io = io;
        this.socket = socket;
        this.route = async (payload: string) => {
            const {token, chatId, user} = this.socket as Socket & {user: User, chatId: string, token: string};
            const message = JSON.parse(payload) as ChatMessage;
            const apexCareApi = new ApexCareApi(APEX_CARE_API_BASE_URL, { 'Authorization': `Bearer ${token}` })
            const chatRepository = new ChatRepository(apexCareApi);
            const serviceRepository = new ServiceRepository(apexCareApi)
            
            try {
                const chat = await chatRepository.findById(chatId);
                let services = await serviceRepository.findAll();

                console.log(services)

                this.io.to(chatId).emit("chatMessage", JSON.stringify({ ...message, user: user }));
    
                const gptResponse = await classifyAndRespond(message.message, chat?.chatMessages.map((chatMessage: any) => ({
                    role: chatMessage.userId == (user as User).id ? "user" : "assistant",
                    content: chatMessage.message
                })) || [], services);
    
                const createdAutomatedMessage = await chatRepository.createChatMessage(chatId, 101, gptResponse.userReply);
    
                this.io.to(chatId).emit("chatMessage", JSON.stringify({
                    ...createdAutomatedMessage,
                    user: {
                        username: "GPT Gerrie",
                        id: 101,
                    }
                }));
    
                if(gptResponse.prediction){
                    const {serviceName, urgency} = gptResponse;
                    let chatAction: ChatAction<Partial<Job>> = {
                        action: "confirmJob",
                        options: ["Confirm", "Decline"],
                        data: { serviceName, urgency: Number(urgency) },
                        format: {
                            meta: String(urgency),
                            title: `Submit request for ${serviceName}`,
                        }
                    }
                    this.io.to(chatId).emit("action", JSON.stringify(chatAction));
                }
            } catch (error) {
                console.error("Error with GPT model:", error);
                this.socket.emit("error", "Failed to process your message.");
            }
        }
    }

}