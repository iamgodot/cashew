import { useConversationContext } from "@/contexts/ConversationContext"
import { Separator } from "./ui/separator"

const Conversation = ({ conversation, last }) => {
    const { currentConversation, setCurrentConversation } =
        useConversationContext()
    const isCurrent = currentConversation?.id === conversation.id
    return (
        <>
            <div
                className={`flex gap-1 my-1 pl-2 items-center hover:bg-gray-100 rounded p-1 cursor-pointer ${isCurrent ? "bg-gray-200" : ""}`}
                onClick={() => setCurrentConversation(conversation)}
            >
                <div className="w-12 rounded-full">
                    <img
                        src={conversation.profilePic}
                        alt="Conversation"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
                <p className="font-bold">{conversation.nickname}</p>
            </div>
        </>
    )
}

export default Conversation
