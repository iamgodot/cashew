import { format } from "date-fns"
import { useAuthContext } from "@/contexts/AuthContext"
import { useConversationContext } from "@/contexts/ConversationContext"

function Message({ message }) {
    const { authUser } = useAuthContext()
    const { currentConversation } = useConversationContext()
    const fromSelf = message.senderId === authUser.id
    const msgContent = message.content
    const msgTime = format(message.createdAt, "H:mm")

    if (!fromSelf) {
        return (
            <div className="flex items-start justify-start gap-1 mb-4">
                <img
                    src={currentConversation.profilePic}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col items-start">
                    <span className="bg-gray-300 rounded-lg p-3 mb-1 text-sm text-left max-w-[400px]">
                        {msgContent}
                    </span>
                    <span className="text-xs text-gray-600">{msgTime}</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex items-start justify-end gap-2 mb-4">
                <div className="flex flex-col items-end">
                    <span className="bg-green-500 rounded-lg p-3 mb-1 text-sm text-left max-w-[400px]">
                        {msgContent}
                    </span>
                    <span className="text-xs text-gray-600">{msgTime}</span>
                </div>
                <img
                    src={authUser.profilePic}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        )
    }
}

export default Message
