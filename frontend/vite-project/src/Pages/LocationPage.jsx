import { useLocation, useParams } from "react-router-dom";

import WeatherCurrentDay from "../components/WeatherCurrentDay.jsx";
import WeatherFavouriteBtn from "../components/WeatherFavouriteBtn.jsx";
import WeatherForecast from "../components/WeatherForecast.jsx";

import "./Weather.css";

const Weather = () => {
  const locationState = useLocation().state;
  const { location } = useParams();
  const locationName = locationState ? locationState.location : location;
  const weatherData = useFetchWeatherData(locationName);

  if (!locationState && !location) {
    return (
      <h1 className="not-searched">
        You haven't searched yet. Please search for a location
      </h1>
    );
  }

  return (
    <div className="weather-container weather-page">
      <h2>Telling you about ...</h2>
      <h1 className="weather-title">
        {locationName.charAt(0).toUpperCase() + locationName.slice(1)}
      </h1>
      <WeatherFavouriteBtn location={locationName} />
      <WeatherCurrentDay location={locationName} weatherData={weatherData} />
      <WeatherForecast location={locationName} weatherData={weatherData} />
    </div>
  );
};

export default Weather;
