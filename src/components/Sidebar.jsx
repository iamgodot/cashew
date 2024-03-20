import { useAuthContext } from "@/contexts/AuthContext"
import { useSocketContext } from "@/contexts/SocketContext"
import Conversations from "./Conversations"
import SearchInput from "./SearchInput"
import Profile from "./chat/Profile"

const Sidebar = () => {
    const { authUser } = useAuthContext()
    const { onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(authUser.id)
    return (
        <div className="border-r border-gray-300 flex flex-col h-full w-1/4 min-w-[200px]">
            <SearchInput />
            <Conversations />
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
