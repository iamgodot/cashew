const Conversation = () => {
    return (
        <>
            <div className="flex gap-1 items-center hover:bg-gray-300 rounded p-1 cursor-pointer">
                <div className="w-12 rounded-full">
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                        alt="user avatar"
                    />
                </div>
                <p className="font-bold">John Doe</p>
            </div>
        </>
    )
}

export default Conversation
