import User from "../models/user.js"

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({ _id: { $ne: req.user.id } })
        res.status(200).json(users)
    } catch (error) {
        console.error("Error when getting users", error.message)
        next(error)
    }
}
