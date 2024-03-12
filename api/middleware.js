export const errorHandler = (error, req, res, next) => {
    console.log("Error handled:", error.message)
    res.status(500).json({ error: "Internal server error" })
}
