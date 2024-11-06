import { API } from "../../../domain/api/api";
import { Chat, ChatMessage, Job } from "../../../domain/models";

export const chatRoutes = {
    "GET /chat/": (url: string) =>
        API.route<Chat[]>({
            url,
            method: "GET",
            route: `/chat/`,
        }),
        
    "POST /chat/": (url: string) =>
        API.route<Chat>({
            url,
            method: "POST",
            route: `/chat/`,
            headers: {
                "Content-Type": "application/json",
            }
        }),

    "GET /chat/:id": (url: string, { id }: { id: string }) =>
        API.route<Chat & {chatMessages: ChatMessage[]}>({
            url,
            method: "GET",
            route: `/chat/${id}`,
        }),
    
    "POST /chat/:id/message": (url: string, { id }: { id: string }, body: {
        message: string,
        userId: number,
    }) =>
        API.route<ChatMessage>({
            url,
            method: "POST",
            route: `/chat/${id}/message`,
            body,
            headers: {
                "Content-Type": "application/json",
            }
        }),

    "GET /chat/:id/message": (url: string, { id }: { id: string }) =>
        API.route<ChatMessage[]>({
            url,
            method: "GET",
            route: `/chat/${id}/message`,
            headers: {
                "Content-Type": "application/json",
            }
        }),

    "POST /chat/:id/job": (url: string, { id }: { id: string }, body: Partial<Job>) =>
        API.route<Job>({
            url,
            method: "POST",
            route: `/chat/${id}/job`,
            body,
            headers: {
                "Content-Type": "application/json",
            }
        }),

    "GET /chat/:id/job": (url: string, { id }: { id: string }) =>
        API.route<Job>({
            url,
            method: "GET",
            route: `/chat/${id}/job`,
            headers: {
                "Content-Type": "application/json",
            }
        }),
} as const;

export type ChatRoute = keyof typeof chatRoutes;
