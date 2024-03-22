import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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

  return (
    <div>
      <Layout>
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
            path="favouritelocations"
            element={
              <FavouriteLocationsPage
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
