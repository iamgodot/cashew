import express from "express";
import dotenv from "dotenv";
import router from "./routes/auth.js";
import cookieParser from "cookie-parser";
import connectDB from "./db.js";
import { errorHandler } from "./middleware.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use("/api/auth", router);
app.use(errorHandler);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT} 🎉 🚀`);
});
