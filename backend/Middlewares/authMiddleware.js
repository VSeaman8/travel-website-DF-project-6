import User from "../models/User.js";

const authenticate = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.headers.username });
    if (!user) {
      throw new Error("User not found");
    }
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export default authenticate;
