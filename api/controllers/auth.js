import User from "../models/user.js"

export const login = async (req, res, next) => {
    try {
        const { sub, accessToken } = req.body
        if (!sub || !accessToken) {
            res.status(401).json({ error: "Invalid credentials" })
        }

        var user = await User.findOne({ username: sub })
        if (!user) {
            const resp = await fetch(
                `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${sub}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            const { nickname, user_id, email, picture } = await resp.json()
            user = new User({
                email,
                username: user_id,
                nickname: nickname,
                profilePic: picture,
            })
            await user.save()
        }
        res.status(200).json({
            id: user._id,
            nickname: user.nickname,
            email: user.email,
            profilePic: user.profilePic,
        })
    } catch (error) {
        next(error)
    }
}
export const logout = async (req, res) => {
    //TODO: record logout
    res.status(200).json({ message: "Logged out" })
}
