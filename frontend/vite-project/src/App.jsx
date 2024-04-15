import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import FavouriteLocationsPage from "./pages/FavouriteLocationsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import Layout from "./components/Layout.jsx";
import NavigateWithData from "./utilityFunctions/NavigateWithData.js";
import RegistrationPage from "./pages/RegistrationPage.jsx";

import { loginUser } from "./utilityFunctions/InternalApiCall.js";
import {
  getFavouriteLocations,
  addFavouriteLocation,
  removeFavouriteLocation,
} from "./utilityFunctions/IntApiCallFavourite.js";

import "./App.css";

const App = () => {
  const [favourite, setFavourite] = useState([]);
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  // Refactored code for connecting front to backend for favourite location
  const [user, setUser] = useState(null);

  const handleLogin = async (userDetails) => {
    try {
      const loggedInUser = await loginUser(userDetails);
      console.log("loggedInUser:", loggedInUser);
      console.log("loggedInUser._id:", loggedInUser.user);
      console.log(`Logged in as: ${loggedInUser.user}`);
      setUser(loggedInUser.user);
      const favouriteLocations = await getFavouriteLocations(loggedInUser.user);
      setFavourite(favouriteLocations);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your username and password.");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAddFavourite = async (location) => {
    await addFavouriteLocation(user, location);
    const updatedFavourites = await getFavouriteLocations(user);
    setFavourite(updatedFavourites);
  };

  const handleRemoveFavourite = async (location) => {
    await removeFavouriteLocation(user, location);
    const updatedFavourites = await getFavouriteLocations(user);
    setFavourite(updatedFavourites);
  };

  return (
    <div>
      <Layout
        favourite={favourite}
        selectedLocation={location}
        setSelectedLocation={setLocation}
        user={user}
        handleLogout={handleLogout}
      >
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage location={location} setLocation={setLocation} />}
          />
          <Route
            path="/login"
            element={<LogInPage handleLogin={handleLogin} />}
          />
          <Route path="/register" element={<RegistrationPage />} />
          <Route
            path="/location/:location"
            element={
              <LocationPage
                favourite={favourite}
                onAddFavourite={handleAddFavourite}
                onRemoveFavourite={handleRemoveFavourite}
              />
            }
          />
          <Route
            path="/favouritelocations"
            element={
              <FavouriteLocationsPage
                setSelectLocation={setLocation}
                favourite={favourite}
                onAddFavourite={handleAddFavourite}
                onRemoveFavourite={handleRemoveFavourite}
              />
            }
          />
        </Routes>
        <NavigateWithData location={location} />
      </Layout>
    </div>
  );
};

export default App;

// Connection to local Storage for using favourite locations - keep for moment
/*import {
  getLocations,
  addLocation,
  removeLocation,
} from "./UtilityFunctions/FavouriteLocationsArrayUtility.js";*/
/*const [favourite, setFavourite] = useState(getLocations());

  const handleAddFavourite = (location) => {
    addLocation(location);
    const updatedFavourites = getLocations();
    setFavourite(updatedFavourites);
    console.log("Added to favourites:", location);
    console.log("Updated favourites:", updatedFavourites);
  };

  const handleRemoveFavourite = (location) => {
    removeLocation(location);
    const updatedFavourites = getLocations();
    setFavourite(updatedFavourites);
    console.log("Removed from favourites:", location);
    console.log("Updated favourites:", updatedFavourites);
  };*/
