import { Chat } from "../components/chat";
import { ChatList } from "../components/chat-list";

export function ChatsView() {
    return (
        <div className="flex items-stretch gap-5">
            {/* <ChatList /> */}
            <div className="flex-1">
                <Chat />
            </div>
        </div>
    );
}
