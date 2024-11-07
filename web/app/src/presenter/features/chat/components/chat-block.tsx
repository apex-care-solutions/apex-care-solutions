"use client";
import { Badge } from "@/presenter/components/ui/badge";
import { Button } from "@/presenter/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/presenter/components/ui/card";
import { Input } from "@/presenter/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useChat } from "../hooks/useChat";
import { UserAuth, useSession } from "../../auth/context/auth-provider";
import { MessageBubble } from "./message-bubble";
import { cn } from "@/presenter/lib/utils";
import { ChatActionInterface } from "./actions/chat-action-interface";
import Link from "next/link";
import { Chat, ChatMessage } from "@/domain/models";
import { createChatMessage } from "@/presenter/actions/chat-actions";

export function ChatBlock({
    chat,
    history,
}: {
    chat: Chat;
    history: (ChatMessage & { user: UserAuth })[];
}) {
    const {
        chatHistory,
        setChatHistory,
        sendMessage,
        loading,
        action,
        socket,
        jobRequest,
    } = useChat(chat, history);

    const [input, setInput] = useState("");
    const [user] = useSession();

    const handleSendMessage = async () => {
        if (input.trim()) {
            let { data: message } = await createChatMessage(chat.id, input);
            if (message) {
                setChatHistory((prevChat) => [
                    ...prevChat,
                    { ...message, user: user as UserAuth },
                ]);
                sendMessage(message);
                setInput("");
            }
        }
    };

    return (
        <Card className="flex flex-col h-[75vh] overflow-hidden">
            <CardHeader className="p-2.5 bg-primary text-primary-foreground">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-full bg-primary-foreground"></div>
                        Gerrie die GPT
                    </div>
                    <div className="flex justify-end">
                        <Badge variant="secondary">Accepted</Badge>
                    </div>
                </div>
            </CardHeader>
            {!chat?.active || !!jobRequest ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2.5 bg-primary/20 z-10">
                    <p>Chat has been closed.</p>
                    <Link href="/jobs">
                        <Button size="sm">Go to jobs</Button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className="flex-1 overflow-y-scroll flex flex-col gap-5 items-center relative">
                        {action && socket && (
                            <div className="sticky top-0 z-10 w-full p-5 bg-border text-primary">
                                <ChatActionInterface
                                    chatAction={action}
                                    socket={socket}
                                />
                            </div>
                        )}
                        {chatHistory.map((msg, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "w-full flex px-10",
                                    user?.id === msg.userId
                                        ? "justify-end"
                                        : "justify-start",
                                )}
                            >
                                <div className="w-[80%]">
                                    <MessageBubble
                                        timestamp={msg.createdAt}
                                        username={
                                            user?.id === msg.userId
                                                ? "You"
                                                : msg?.user?.username ||
                                                  "GPT Gerrie"
                                        }
                                    >
                                        {msg.message}
                                    </MessageBubble>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div
                                className={cn(
                                    "w-full flex px-10",
                                    "justify-start",
                                )}
                            >
                                <div className="w-[80%]">
                                    <MessageBubble username="GPT Gerrie">
                                        <div className="w-full flex justify-center">
                                            <img src="/typing.svg" />
                                        </div>
                                    </MessageBubble>
                                </div>
                            </div>
                        )}
                    </div>
                    <CardFooter className="flex gap-1 p-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            onKeyDown={(e) =>
                                e.key === "Enter" && handleSendMessage()
                            }
                        />
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={handleSendMessage}
                        >
                            <ArrowRight />
                        </Button>
                    </CardFooter>
                </>
            )}
        </Card>
    );
}
