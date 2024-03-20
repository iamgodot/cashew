import useConversations from "@/hooks/useConversations"
import Conversation from "./Conversation"
import { Loader2 } from "lucide-react"

const Conversations = () => {
    const { loading, conversations } = useConversations()
    return (
        <div className="p-2 flex flex-col overflow-auto">
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation.id}
                    conversation={conversation}
                />
            ))}
            {loading ? <Loader2 /> : null}
        </div>
    )
}

export default Conversations
