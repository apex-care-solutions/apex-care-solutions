import {
    createChat,
    getChat,
    getChatMessages,
} from "@/presenter/actions/chat-actions";
import { ChatBlock } from "../components/chat-block";
import { redirect } from "next/navigation";
import { NotFoundView } from "../../core/views/not-found-view";

export async function ChatsView({
    params,
}: {
    params: Promise<{ chatId?: string }>;
}) {
    let chatRes;
    let chat;
    let historyRes;
    let history;
    const { chatId } = await params;

    if (chatId) {
        chatRes = await getChat(Number(chatId));
        chat = chatRes.data;
        historyRes = await getChatMessages(Number(chatId));
        history = historyRes.data;
    } else {
        chatRes = await createChat();
        chat = chatRes.data;
        history = [];
        if (chat?.id) {
            redirect(`/chat/${chat.id}`);
        }
    }

    if (!chat) return <NotFoundView />;

    return (
        <div className="flex items-stretch gap-5">
            {/* <ChatList /> */}
            <div className="flex-1">
                <ChatBlock chat={chat} history={history} />
            </div>
        </div>
    );
}
