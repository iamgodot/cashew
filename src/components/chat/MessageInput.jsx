import { Send } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const MessageInput = () => {
    return (
        <form className="flex items-center p-3 gap-2">
            <Input placeholder="Send a message" className="rounded-full" />
            <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="w-12 rounded-full hover:bg-gray-300"
            >
                <Send />
            </Button>
        </form>
    )
}

export default MessageInput
