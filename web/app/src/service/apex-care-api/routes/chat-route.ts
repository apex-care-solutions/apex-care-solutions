import { API } from "../../api";
import { Chat, ChatMessage } from "../apex-care-types";

export const chatRoutes = {
    "GET /chat/": (        
        url: string,
    ) =>
        API.route<Chat[]>({
            url,
            method: "GET",
            route: `/chat/`,
        }),
    "POST /chat/": (url: string, body: RegisterData) =>
        API.route<Chat>({
            url,
            method: "POST",
            route: `/chat/`,
            body,
            headers: {
                "Content-Type": "application/json",
            }
        }),
        "GET /chat/:id": (        
            url: string,
            {id}: {id: string}
        ) =>
            API.route<Chat>({
                url,
                method: "GET",
                route: `/chat/${id}`,
            }),
    "POST /chat/:id/messages": (url: string, { id }: { id: string }, body: { message: string }) =>
        API.route<ChatMessage>({
            url,
            method: "POST",
            route: `/chat/${id}/messages`,
            body,
            headers: {
                "Content-Type": "application/json",
            }
        }),
    "GET /chat/:id/messages": (url: string, { id }: { id: string }) =>
        API.route<ChatMessage[]>({
            url,
            method: "GET",
            route: `/chat/${id}/messages`,
            headers: {
                "Content-Type": "application/json",
            }
        }),
} as const;

export interface RegisterData {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface LoginData {
    username: string;
    password: string;
}

export type ChatRoute = keyof typeof chatRoutes;
