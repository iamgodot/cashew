import { useState, useEffect } from "react"
import { toast } from "@/components/ui/use-toast"
import { useAuthContext } from "@/contexts/AuthContext"
import { useConversationContext } from "@/contexts/ConversationContext"

const useMessages = () => {
    const [sending, setSending] = useState(false)
    const [loading, setLoading] = useState(false)
    const { accessToken } = useAuthContext()
    const { currentMessages, setCurrentMessages, currentConversation } =
        useConversationContext()

    const sendMessage = async (message) => {
        setSending(true)
        try {
            const resp = await fetch(
                `/api/messages/${currentConversation.id}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ content: message }),
                }
            )
            const data = await resp.json()
            setCurrentMessages([...currentMessages, data])
        } catch (e) {
            toast({
                variant: "destructive",
                title: "Un oh! Something went wrong.",
                description: e.message,
            })
            console.log(e.message)
        } finally {
            setSending(false)
        }
    }

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const resp = await fetch(
                    `/api/messages/${currentConversation.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )
                const data = await resp.json()
                setCurrentMessages(data)
            } catch (e) {
                toast({
                    variant: "destructive",
                    title: "Un oh! Something went wrong.",
                    description: e.message,
                })
                console.log(e.message)
            } finally {
                setLoading(false)
            }
        }
        if (currentConversation) getMessages()
    }, [accessToken, currentConversation, setCurrentMessages])

    return { sending, sendMessage, loading, currentMessages }
}

export default useMessages
