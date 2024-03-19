import { useAuthContext } from "@/contexts/AuthContext"
import Conversations from "./Conversations"
import SearchInput from "./SearchInput"

const Sidebar = () => {
    const { authUser } = useAuthContext()
    return (
        <div className="border-r border-gray-300 p-2 flex flex-col h-full w-1/4 min-w-[200px]">
            <SearchInput />
            <Conversations />
            <div className="flex items-center pt-5 pb-1 gap-2 mt-auto">
                <img
                    src={authUser.profilePic}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 flex items-center justify-between">
                    <span className="font-semibold">Godot</span>
                    <ul className="list-disc marker:text-green-600">
                        <li className="text-xs text-gray-600">Online</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
