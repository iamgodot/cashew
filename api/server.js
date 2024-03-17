import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth.js"
import messageRouter from "./routes/message.js"
import userRouter from "./routes/user.js"
import connectDB from "./db.js"
import { errorHandler, authHandler } from "./middleware.js"
import { auth } from "express-oauth2-jwt-bearer"

const app = express()
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send("Hello world!")
})
app.use("/api/auth", authRouter)
app.use(
    "/api/messages",
    auth({
        issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
    }),
    authHandler,
    messageRouter
)
app.use(
    "/api/users",
    auth({
        issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
    }),
    authHandler,
    userRouter
)
app.use(errorHandler)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on http://localhost:${PORT} 🎉 🚀`)
})
