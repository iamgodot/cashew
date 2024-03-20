import useMessages from "@/hooks/useMessages"
import Message from "./Message"
import { Skeleton } from "../ui/skeleton"
import { useEffect, useRef } from "react"
import useNewMessage from "@/hooks/useNewMessage"

const Messages = () => {
    const { loading, currentMessages } = useMessages()
    useNewMessage()
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [currentMessages])

    if (loading)
        return (
            <div className="flex items-center justify-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        )
    return (
        <div className="flex-1 flex-col overflow-auto overscroll-contain">
            {currentMessages.map((message, idx) => (
                <Message key={idx} message={message} />
            ))}
            <div ref={messagesEndRef}></div>
        </div>
    )
}

export default Messages
