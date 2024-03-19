import { Loader2, Send } from "lucide-react"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { useState } from "react"
import useMessages from "@/hooks/useMessages"

const MessageInput = () => {
    const [message, setMessage] = useState("")
    const { sending, sendMessage } = useMessages()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendMessage(message)
        setMessage("")
    }

    return (
        <form className="flex items-center p-3 gap-2" onSubmit={handleSubmit}>
            <Textarea
                placeholder="Send a message"
                className="rounded-full resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        handleSubmit(e)
                    }
                }}
            />
            <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="w-12 rounded-full hover:bg-gray-300"
                disabled={sending}
            >
                {sending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Send />
                )}
            </Button>
        </form>
    )
}

export default MessageInput
