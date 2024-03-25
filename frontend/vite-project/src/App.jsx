import { useState } from "react";
import { Routes, Route } from "react-router-dom";
/*import {
  getFavouriteLocations,
  addFavouriteLocation,
  removeFavouriteLocation,
} from "./UtilityFunctions/IntApiCallFavourite.js";*/
import {
  getLocations,
  addLocation,
  removeLocation,
} from "./UtilityFunctions/FavouriteLocationsArrayUtility.js";
import FavouriteLocationsPage from "./Pages/FavouriteLocationsPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import LogInPage from "./Pages/LogInPage.jsx";
import Layout from "./Components/Layout.jsx";
import NavigateWithData from "./UtilityFunctions/NavigateWithData.js";
import RegistrationPage from "./Pages/RegistrationPage.jsx";

import "./App.css";

const App = () => {
  const [location, setLocation] = useState("");
  //const [favourite, setFavourite] = useState([]);

  // Connection to local Storage for using favourite locations

  const [favourite, setFavourite] = useState(getLocations());

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
  };

  // Refactored code for connecting front to backend for favourite location
  /*const [user, setUser] = useState(null);

  const handleLogin = async (userDetails) => {
    try {
      const loggedInUser = await loginUser(userDetails);
      console.log(`Logged in as: ${loggedInUser.username}`);
      setUser(loggedInUser);
      const favouriteLocations = await getFavouriteLocations(loggedInUser.id);
      setFavourite(favouriteLocations);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your username and password.");
    }
  };

  const handleAddFavourite = async (location) => {
    await addFavouriteLocation(user.id, location);
    const updatedFavourites = await getFavouriteLocations(user.id);
    setFavourite(updatedFavourites);
  };

  const handleRemoveFavourite = async (location) => {
    await removeFavouriteLocation(user.id, location);
    const updatedFavourites = await getFavouriteLocations(user.id);
    setFavourite(updatedFavourites);
  };*/

  return (
    <div>
      <Layout
        favourite={favourite}
        selectedLocation={location}
        setSelectedLocation={setLocation}
      >
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage location={location} setLocation={setLocation} />}
          />
          <Route path="/login" element={<LogInPage />} />
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
