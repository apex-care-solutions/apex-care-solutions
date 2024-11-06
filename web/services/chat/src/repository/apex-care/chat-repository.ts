import { Chat, ChatMessage, Job } from "../../domain/models";
import { ApexCareApi } from "../../service/apex-care/apex-care-api";

export class ChatRepository {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<Chat[]> {
        return await this.apexCareApi.request("GET /chat/");
    }

    async findById(id: string): Promise<Chat & {chatMessages: ChatMessage[]} | undefined> {
        return await this.apexCareApi.request("GET /chat/:id", { id });
    }

    async create(): Promise<Chat> {
        return await this.apexCareApi.request("POST /chat/");
    }

    async createChatMessage(id: string, userId: number, message: string): Promise<ChatMessage> {
        return await this.apexCareApi.request("POST /chat/:id/message", { id }, { userId, message });
    }

    async getChatMessages(id: string): Promise<ChatMessage[]> {
        return await this.apexCareApi.request("GET /chat/:id/message", { id });
    }

    async createJobForChat(id: string, jobData: Partial<Job>): Promise<Job> {
        return await this.apexCareApi.request("POST /chat/:id/job", { id }, jobData);
    }

    async getJobForChat(id: string): Promise<Job> {
        return await this.apexCareApi.request("GET /chat/:id/job", { id });
    }
}
