// Please note that HotelContainer is not added as API is no longer available
import { useLocation, useParams } from "react-router-dom";

import WeatherContainer from "../containers/weatherContainer.jsx";
import LocationFavouriteBtn from "../components/LocationFavouriteBtn.jsx";
import MapContainer from "../containers/MapContainer.jsx";

import "./LocationPage.css";

const LocationPage = ({ favourite, onAddFavourite, onRemoveFavourite }) => {
  const { weatherData } = useLocation().state || {};
  const { location } = useParams();

  if (!weatherData && !location) {
    return (
      <h1 className="not-searched">
        You haven't searched yet. Please search for a location
      </h1>
    );
  }

  const { lat, lon } = weatherData;

  return (
    <div className="locationPage-container">
      <h2>Telling you about ...</h2>
      <h1 className="location-title weather-title">
        {location.charAt(0).toUpperCase() + location.slice(1)}
      </h1>
      <LocationFavouriteBtn
        location={location}
        favourite={favourite}
        onAddFavourite={onAddFavourite}
        onRemoveFavourite={onRemoveFavourite}
      />
      <div className="containerLayout">
        <WeatherContainer weatherData={weatherData} />
        <MapContainer lat={lat} lon={lon} />
      </div>
    </div>
  );
};

export default LocationPage;
