import { useSocketContext } from "@/contexts/SocketContext"
import { useEffect } from "react"
import useMessages from "./useMessages"
import { useConversationContext } from "@/contexts/ConversationContext"

const useNewMessage = () => {
    const { socket } = useSocketContext()
    const { currentMessages, setCurrentMessages } = useMessages()
    const { currentConversation } = useConversationContext()
    useEffect(() => {
        socket?.on("newMessage", (message) => {
            if (message.senderId === currentConversation.id) {
                setCurrentMessages([...currentMessages, message])
            }
        })
        return () => socket?.off("newMessage")
    }, [socket, currentMessages, setCurrentMessages, currentConversation])
}

export default useNewMessage
