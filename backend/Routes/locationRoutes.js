import express from "express";
import { getFavouriteLocations } from "../controllers/locationController.js";
import authenticate from "../Middlewares/authMiddleware.js";

// Create a new Router
const router = express.Router();

// Get Route for favourite Location
router.get("/", authenticate, getFavouriteLocations);

export default router;
