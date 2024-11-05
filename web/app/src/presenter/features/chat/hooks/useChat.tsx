import { apexCareApi } from "@/domain/data/services/apex-care-api/apex-care-api";
import {
    Chat,
    ChatMessage,
} from "@/domain/data/services/apex-care-api/apex-care-types";
import { ChatRepository } from "@/domain/repository/chat-repository";
import { useState, useEffect, useCallback } from "react";
import { io, Socket } from "socket.io-client";

export function useChat(chatId?: string) {
    const [chat, setChat] = useState<Chat | undefined>();
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

    const chatRepository = new ChatRepository(apexCareApi);
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
    const [action, setAction] = useState<
        | {
              action: string;
              data: {
                  jobType: string;
                  urgency: string;
              };
          }
        | undefined
    >();

    useEffect(() => {
        if (chatId) {
            chatRepository.getMessages(chatId).then((res) => {
                if (res.data) {
                    setChatHistory((prev) => [...(res.data || []), ...prev]);
                }
            });

            chatRepository.findById(chatId).then((res) => {
                if (res.data) {
                    setChat(res.data);
                }
            });
        }

        const newSocket = io("http://localhost:3333", {
            withCredentials: true,
            query: { chatId },
        });

        newSocket.on("chatMessage", (message: string) => {
            setChatHistory((prevChat) => [...prevChat, JSON.parse(message)]);
            setLoading(false);
        });

        newSocket.on("action", (message: string) => {
            setAction(JSON.parse(message));
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
    }, [chatId]);

    const sendMessage = useCallback(
        (message: string) => {
            if (socket) {
                setLoading(true);
                socket.emit("chatMessage", message);
            }
        },
        [socket, setLoading],
    );

    return {
        chatHistory,
        action,
        sendMessage,
        loading,
        jobRequest,
        socket,
        chat,
    };
}
