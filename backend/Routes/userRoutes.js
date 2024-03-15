import express from "express";
import User from "../Models/User.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
