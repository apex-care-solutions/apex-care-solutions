"use client";
import { Chat, ChatMessage, User } from "@/domain/models";
import { useState, useEffect, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import { ChatAction } from "../components/actions/chat-action";
import { UserAuth, useSession } from "../../auth/context/auth-provider";

export function useChat(
    chat: Chat,
    history: (ChatMessage & { user: UserAuth })[],
) {
    const [user] = useSession();
    const [chatHistory, setChatHistory] =
        useState<(ChatMessage & { user: UserAuth })[]>(history);

    const [loading, setLoading] = useState(false);
    const [socket, setSocket] = useState<Socket | undefined>();
    const [jobRequest, setJobRequest] = useState<
        | {
              id: number;
              urgency: string;
              type: string;
          }
        | undefined
    >();
    const [action, setAction] = useState<ChatAction<unknown> | undefined>();

    useEffect(() => {
        const newSocket = io("http://localhost:3333", {
            withCredentials: true,
            query: { chatId: chat.id },
        });

        newSocket.on("chatMessage", (message: string) => {
            let chatMessage = JSON.parse(message) as ChatMessage & {
                user: User;
            };
            if (!(user?.id == chatMessage.user.id)) {
                setChatHistory((prevChat) => [...prevChat, chatMessage]);
                setLoading(false);
            }
        });

        newSocket.on("action", (message: string) => {
            let action = JSON.parse(message);
            setAction(action);
            setLoading(false);
        });

        newSocket.on("requestCreated", (request: string) => {
            setJobRequest(JSON.parse(request));
        });

        newSocket.on("error", (errorMessage: string) => {
            console.error("Error:", errorMessage);
            setLoading(false);
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    const sendMessage = useCallback(
        (message: ChatMessage) => {
            if (socket) {
                setLoading(true);
                socket.emit("chatMessage", JSON.stringify(message));
            }
        },
        [socket, setLoading],
    );

    return {
        chatHistory,
        setChatHistory,
        action,
        sendMessage,
        loading,
        jobRequest,
        socket,
    };
}
