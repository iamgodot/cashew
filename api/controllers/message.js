import Conversation from "../models/conversation.js"
import Message from "../models/message.js"

export const sendMessage = async (req, res, next) => {
    try {
        const { message } = req.body
        const { receiverId } = req.params
        const senderId = req.user.id

        var conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const messageNew = new Message({
            senderId,
            receiverId,
            message,
        })
        if (messageNew) {
            conversation.messages.push(messageNew._id)
        }

        await Promise.all([conversation.save(), messageNew.save()])
        res.status(201).json(messageNew)
    } catch (error) {
        console.log("Error when sending message", error.message)
        next(error)
    }
}
export const getMessages = async (req, res, next) => {
    try {
        const { receiverId } = req.params
        const senderId = req.user.id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate("messages")

        return res.status(200).json(conversation?.messages || [])
    } catch (error) {
        console.log("Error when getting messages", error.message)
        next(error)
    }
}
