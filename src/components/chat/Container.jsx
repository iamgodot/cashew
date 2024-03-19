import { useState } from "react"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { useConversationContext } from "@/contexts/ConversationContext"

const Container = () => {
    const { currentConversation } = useConversationContext()
    return (
        <div
            className={`flex flex-col justify-between h-full w-3/4 min-w-[500px] ${currentConversation ? "p-2" : ""}`}
        >
            {!currentConversation ? (
                <NoChatContent />
            ) : (
                <>
                    <div className="flex items-center gap-2 border-b mb-5 p-2">
                        <img
                            src={currentConversation.profilePic}
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="flex flex-col">
                            <span className="font-semibold">
                                {currentConversation.nickname}
                            </span>
                            <span className="text-xs text-gray-600">
                                Online
                            </span>
                        </div>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

const NoChatContent = () => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
            <div className="px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋</p>
                <p>Select a chat to start 💬</p>
            </div>
        </div>
    )
}

export default Container
