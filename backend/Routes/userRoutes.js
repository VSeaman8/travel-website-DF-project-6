import express from "express";
import {
  registerUser,
  loginUser,
  changePassword,
} from "../controllers/UserController.js";

// Create a new Router
const router = express.Router();

// POST Route for user registration
router.post("/", registerUser);

// POST Route for Login
router.post("/login", loginUser);

// Post Route for password change
router.post("/changePassword", changePassword);

export default router;
