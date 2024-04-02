import bcrypt from "bcrypt";
import User from "../Models/User.js";

// Register User
export const registerUser = async (req, res) => {
  try {
    // hash password set up
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user and hash password
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    // Save user to DB
    await user.save();

    // send response status 201 and user id
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log("The error is here");
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    // Find user
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("Invalid username or password");

    // Check Password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid username or password");

    // Send Response
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// User Password Change
export const changePassword = async (req, res) => {
  try {
    // Find user
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("Invalid username or password");

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Update User password
    user.password = hashedPassword;
    await user.save();

    // Response
    res.send({ message: "Password changed successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
