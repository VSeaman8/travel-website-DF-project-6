import User from "../models/User.js";

const authenticate = async (req, res, next) => {
  try {
    console.log("userId from headers:", req.headers.userid);
    const user = await User.findById(req.headers.userid);
    console.log("Found user:", user);
    if (!user) {
      throw new Error("User not found");
    }
    next();
  } catch (error) {
    console.log("Authentication error:", error.message);
    res.status(401).json({ message: error.message });
  }
};

export default authenticate;
