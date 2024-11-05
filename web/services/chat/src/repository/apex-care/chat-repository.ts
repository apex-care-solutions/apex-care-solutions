import { APIResponse } from "../../domain/api/api-response";
import { Chat, ChatMessage, Job } from "../../domain/models";
import { ApexCareApi } from "../../service/apex-care/apex-care-api";

export class ChatRepository {
    constructor(private apexCareApi: ApexCareApi) {}

    async findAll(): Promise<APIResponse<Chat[]>> {
        return await this.apexCareApi.request("GET /chat/");
    }

    async findById(id: string): Promise<APIResponse<Chat & {chatMessages: ChatMessage[]} | undefined>> {
        return await this.apexCareApi.request("GET /chat/:id", { id });
    }

    async create(): Promise<APIResponse<Chat>> {
        return await this.apexCareApi.request("POST /chat/");
    }

    async createChatMessage(id: string, userId: number, message: string): Promise<APIResponse<ChatMessage>> {
        return await this.apexCareApi.request("POST /chat/:id/messages", { id }, { userId, message });
    }

    async getChatMessages(id: string): Promise<APIResponse<ChatMessage[]>> {
        return await this.apexCareApi.request("GET /chat/:id/messages", { id });
    }

    async createJobForChat(id: string, jobData: Partial<Job>): Promise<APIResponse<Job>> {
        return await this.apexCareApi.request("POST /chat/:id/job", { id }, jobData);
    }

    async getJobForChat(id: string): Promise<APIResponse<Job>> {
        return await this.apexCareApi.request("GET /chat/:id/job", { id });
    }
}
