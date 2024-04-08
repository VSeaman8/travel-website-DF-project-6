import express from "express";
import {
  getFavouriteLocations,
  addFavouriteLocation,
  deleteFavouriteLocation,
} from "../controllers/locationController.js";
import authenticate from "../middlewares/authMiddleware.js";

// Create a new Router
const router = express.Router({ mergeParams: true });

// Get Route for favourite Location
router.get("/", authenticate, getFavouriteLocations);

// ADD Route for favourite Location
router.post("/", authenticate, addFavouriteLocation);

// REMOVE Route for Location favourite
router.delete("/", authenticate, deleteFavouriteLocation);

export default router;
