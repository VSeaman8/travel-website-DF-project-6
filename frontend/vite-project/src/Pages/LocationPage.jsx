import { useLocation, useParams } from "react-router-dom";

import WeatherContainer from "../containers/weatherContainer.jsx";
import WeatherFavouriteBtn from "../components/WeatherFavouriteBtn.jsx";

import "./Weather.css";

const LocationPage = () => {
  const locationState = useLocation().state;
  const { location } = useParams();
  const locationName = locationState ? locationState.location : location;
  const weatherData = locationState ? locationState.weatherData : null;

  if (!locationState && !location) {
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
        {locationName.charAt(0).toUpperCase() + locationName.slice(1)}
      </h1>
      <WeatherFavouriteBtn location={locationName} />
      <WeatherContainer location={locationName} weatherData={weatherData} />
    </div>
  );
};

export default LocationPage;
