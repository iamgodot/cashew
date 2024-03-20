import { useConversationContext } from "@/contexts/ConversationContext"
import { Separator } from "./ui/separator"
import { useSocketContext } from "@/contexts/SocketContext"

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
                <div className="relative inline-block">
                    <img
                        src={conversation.profilePic}
                        alt="Conversation"
                        className="w-10 h-10 rounded-full "
                    />
                    {isOnline ? (
                        <span className="w-4 h-4 rounded-full bg-green-500 border-4 border-white absolute bottom-0.5 right-0.5"></span>
                    ) : null}
                </div>
                <p className="font-bold">{conversation.nickname}</p>
            </div>
        </>
    )
}

export default Conversation
