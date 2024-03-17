import express from "express"
import { sendMessage, getMessages } from "../controllers/message.js"

const router = express.Router()

router.get("/:receiverId", getMessages)
router.post("/:receiverId", sendMessage)

export default router
