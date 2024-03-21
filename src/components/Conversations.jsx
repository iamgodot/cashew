import useConversations from "@/hooks/useConversations"
import Conversation from "./Conversation"
import { Loader2 } from "lucide-react"

const Conversations = ({ query }) => {
    const { loading, conversations } = useConversations()
    return (
        <div className="p-2 flex flex-col overflow-auto">
            {conversations
                .filter((conversation) => {
                    return conversation.nickname
                        .toLowerCase()
                        .includes(query.toLowerCase())
                })
                .map((conversation) => (
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
