import MessageInput from "./MessageInput"
import Messages from "./Messages"

const Container = () => {
    return (
        <div className="p-2 flex flex-col justify-between h-full w-3/4 min-w-[500px]">
            <div className="flex items-center gap-2 border-b mb-5 p-2">
                <img
                    src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                    alt="User"
                    className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-semibold">Kiddo Lin</span>
                    <span className="text-xs text-gray-600">Online</span>
                </div>
            </div>
            <Messages />
            <MessageInput />
        </div>
    )
}

export default Container
