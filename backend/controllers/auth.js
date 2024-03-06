import User from "../models/user.js";
import bcrypt from "bcryptjs";
import setCookieToken from "../utils/jwt.js";

export const signup = async (req, res) => {
  const { nickname, username, password, passwordConfirmed, gender } = req.body;

  if (password !== passwordConfirmed) {
    return res.status(400).json({ error: "Confirmed password does not match" });
  }

  const userExisted = await User.findOne({ username });
  if (userExisted) {
    return res.status(400).json({ error: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);
  const genderSlug = gender === "male" ? "boy" : "girl";
  const profilePic = `https://avatar.iran.liara.run/public/${genderSlug}?username=${username}`;
  const userNew = new User({
    nickname,
    username,
    password: passwordHashed,
    gender,
    profilePic,
  });
  setCookieToken(userNew._id, res);
  await userNew.save();
  res.status(201).json({
    id: userNew._id,
    nickname: userNew.nickname,
    username: userNew.username,
    profilePic: userNew.profilePic,
  });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const isPasswordCorrect = await bcrypt.compare(
    password,
    user?.password || "",
  );
  if (!user || !isPasswordCorrect) {
    return res.status(400).json({ error: "Invalid username or password" });
  }
  setCookieToken(user._id, res);
  res.status(200).json({
    id: user._id,
    nickname: user.nickname,
    username: user.username,
    profilePic: user.profilePic,
  });
};
export const logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "Logged out" });
};
