import { useConversationContext } from "@/contexts/ConversationContext"
import { useSocketContext } from "@/contexts/SocketContext"
import Profile from "./chat/Profile"

const Conversation = ({ conversation, last }) => {
    const { currentConversation, setCurrentConversation } =
        useConversationContext()
    const isCurrent = currentConversation?.id === conversation.id
    const { onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(conversation.id)

    return (
        <>
            <div
                className={`flex gap-1 my-1 pl-2 items-center hover:bg-gray-100 rounded p-1 cursor-pointer ${isCurrent ? "bg-gray-200" : ""}`}
                onClick={() => setCurrentConversation(conversation)}
            >
                <Profile
                    src={conversation.profilePic}
                    alt="Conversation"
                    isOnline={isOnline}
                />
                <p className="font-bold">{conversation.nickname}</p>
            </div>
        </>
    )
}

export default Conversation
