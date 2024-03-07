import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        nickname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
        },
    },
    { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
