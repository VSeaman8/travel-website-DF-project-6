import express from "express";
import {
  getFavouriteLocations,
  addFavouriteLocation,
  deleteFavouriteLocation,
} from "../controllers/locationController.js";
import authenticate from "../middlewares/authMiddleware.js";

// Create a new Router
const router = express.Router();

// Get Route for favourite Location
router.get("/user/:userId/favourites", authenticate, getFavouriteLocations);

// ADD Route for favourite Location
router.post("/user/:userId/favourites", authenticate, addFavouriteLocation);

// REMOVE Route for Location favourite
router.delete(
  "/user/:userId/favourites",
  authenticate,
  deleteFavouriteLocation
);

export default router;
