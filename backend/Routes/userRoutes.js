import express from "express";
import bcrypt from "bcrypt";
import User from "../Models/User.js";

// Create a new Router
const router = express.Router();

// POST Route for user registration

router.post("/", async (req, res) => {
  try {
    // hash password set up
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user and hash password
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    // Save user to DB
    await user.save();

    // send response status 201 and user id
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  // Find user
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Invalid username or password");

  // Check Password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Invalid username or password");

  // Send Response
  res.send({ user: user._id });
});

export default router;
