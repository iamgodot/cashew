import { useAuthContext } from "@/contexts/AuthContext"
import { useSocketContext } from "@/contexts/SocketContext"
import Conversations from "./Conversations"
import Profile from "./chat/Profile"
import { Input } from "./ui/input"
import { useState } from "react"

const Sidebar = () => {
    const { authUser } = useAuthContext()
    const { onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(authUser.id)
    const [query, setQuery] = useState("")
    return (
        <div className="border-r border-gray-300 flex flex-col h-full w-1/4 min-w-[200px]">
            <div className="flex items-center p-3 gap-2">
                <Input
                    placeholder="Find a conversation"
                    className="rounded-full bg-gray-100"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <Conversations query={query} />
            <div className="flex items-center p-2 gap-2 mt-auto bg-gray-100">
                <Profile
                    src={authUser.profilePic}
                    alt="Me"
                    isOnline={isOnline}
                />
                <div className="flex flex-col items-start justify-between">
                    <span className="font-semibold">Godot</span>
                    <span className="text-xs text-gray-600">Online</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
