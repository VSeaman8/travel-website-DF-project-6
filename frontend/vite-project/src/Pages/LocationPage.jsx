import { useLocation, useParams } from "react-router-dom";

import WeatherContainer from "../containers/weatherContainer.jsx";
import LocationFavouriteBtn from "../Components/LocationFavouriteBtn.jsx";

import "./LocationPage.css";

const LocationPage = () => {
  const { weatherData } = useLocation().state || {};
  const { location } = useParams();

  if (!weatherData && !location) {
    return (
      <h1 className="not-searched">
        You haven't searched yet. Please search for a location
      </h1>
    );
  }

  return (
    <div className="locationPage-container weather-container weather-page">
      <h2>Telling you about ...</h2>
      <h1 className="location-title weather-title">
        {location.charAt(0).toUpperCase() + location.slice(1)}
      </h1>
      <LocationFavouriteBtn location={location} />
      <WeatherContainer weatherData={weatherData} />
    </div>
  );
};

export default LocationPage;
