import User from "./models/user.js"

export const errorHandler = (error, req, res, next) => {
    console.log("Error handled:", error.message)
    res.status(error.status || 500).json({ error: error.message })
}

export const authHandler = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.auth.payload.sub })
        user.id = user._id
        req.user = user
        next()
    } catch (err) {
        console.log("Failed to decode user from access token")
        next(err)
    }
}
