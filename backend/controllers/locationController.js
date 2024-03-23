import User from "../Models/User.js";

export const getFavouriteLocations = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.headers.username });
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json(user.favouriteLocations);
  } catch (error) {
    next(error);
  }
};

export const addFavouriteLocation = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.headers.username });
    if (!user) {
      throw new Error("User not found");
    }
    user.favouriteLocations.push(req.body.location);
    await user.save();
    res.status(200).json(user.favouriteLocations);
  } catch (error) {
    next(error);
  }
};

export const deleteFavouriteLocation = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.headers.username });
    if (!user) {
      throw new Error("User not found");
    }
    const locationIndex = user.favouriteLocations.indexOf(req.body.location);
    if (locationIndex > -1) {
      user.favouriteLocations.splice(locationIndex, 1);
    }
    await user.save();
    res.status(200).json(user.favouriteLocations);
  } catch (error) {
    next(error);
  }
};
