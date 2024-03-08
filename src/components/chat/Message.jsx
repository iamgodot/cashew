function Message({ content, timestamp, position = "left" }) {
    if (position === "left") {
        return (
            <div className="flex items-start justify-end gap-1 mb-4">
                <div className="flex flex-col items-end">
                    <span className="bg-gray-300 rounded-lg p-3 mb-1 text-sm text-left max-w-[400px]">
                        {content}
                    </span>
                    <span className="text-xs text-gray-600">{timestamp}</span>
                </div>
                <img
                    src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                />
            </div>
        )
    } else {
        return (
            <div className="flex items-start justify-start gap-1 mb-4">
                <img
                    src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col items-start">
                    <span className="bg-gray-300 rounded-lg p-3 mb-1 text-sm text-left max-w-[400px]">
                        {content}
                    </span>
                    <span className="text-xs text-gray-600">{timestamp}</span>
                </div>
            </div>
        )
    }
}

export default Message
