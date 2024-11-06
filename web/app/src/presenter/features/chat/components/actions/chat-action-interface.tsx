"use client";
import { Button } from "@/presenter/components/ui/button";
import { Socket } from "socket.io-client";
import { ChatAction } from "./chat-action";

export function ChatActionInterface({
    socket,
    chatAction,
}: {
    socket: Socket;
    chatAction: ChatAction<unknown>;
}) {
    const { options, data, action, format } = chatAction;
    const { meta, title, body, footer } = format;

    return (
        <div className="flex items-center justify-between gap-5 rounded-lg">
            <div className="font-bold flex flex-col gap-1">
                <div className="text-xs">{meta}</div>
                <div>{title}</div>
                <div>{body}</div>
                <div>{footer}</div>
            </div>
            <div className="flex gap-2.5">
                {options.map((option) => (
                    <Button
                        key={option}
                        size="sm"
                        onClick={() => {
                            socket.emit(
                                "action",
                                JSON.stringify({
                                    action,
                                    option,
                                    data,
                                }),
                            );
                        }}
                    >
                        {option}
                    </Button>
                ))}
            </div>
        </div>
    );
}
