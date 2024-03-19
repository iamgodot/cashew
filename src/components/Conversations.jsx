import useConversations from "@/hooks/useConversations"
import Conversation from "./Conversation"
import { Separator } from "./ui/separator"
import { Loader2 } from "lucide-react"

const Conversations = () => {
    const { loading, conversations } = useConversations()
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation.id}
                    conversation={conversation}
                    last={idx === conversations.length - 1}
                />
            ))}
            {loading ? <Loader2 /> : null}
        </div>
    )
}

export default Conversations
