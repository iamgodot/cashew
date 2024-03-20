import { useSocketContext } from "@/contexts/SocketContext"
import { useEffect } from "react"
import useMessages from "./useMessages"

const useNewMessage = () => {
    const { socket } = useSocketContext()
    const { currentMessages, setCurrentMessages } = useMessages()
    useEffect(() => {
        socket?.on("newMessage", (message) => {
            setCurrentMessages([...currentMessages, message])
        })
        return () => socket?.off("newMessage")
    }, [socket, currentMessages, setCurrentMessages])
}

export default useNewMessage
