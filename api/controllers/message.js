import { getReceiverSocketId, io } from "../socket.js"
import Conversation from "../models/conversation.js"
import Message from "../models/message.js"

export const sendMessage = async (req, res, next) => {
    try {
        const { content } = req.body
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
            content,
        })
        if (messageNew) {
            conversation.messages.push(messageNew._id)
        }

        await Promise.all([conversation.save(), messageNew.save()])

        const receiverSocketId = getReceiverSocketId(receiverId)
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", messageNew)
        }

        //TODO: _id -> id
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

        //TODO: _id -> id
        res.status(200).json(conversation?.messages || [])
    } catch (error) {
        console.log("Error when getting messages", error.message)
        next(error)
    }
}
