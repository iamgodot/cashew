const Profile = ({ src, alt, isOnline }) => {
    return (
        <div className="relative inline-block">
            <img src={src} alt={alt} className="w-10 h-10 rounded-full " />
            {isOnline ? (
                <span className="w-4 h-4 rounded-full bg-green-500 border-4 border-white absolute bottom-0.5 right-0.5"></span>
            ) : null}
        </div>
    )
}

export default Profile
