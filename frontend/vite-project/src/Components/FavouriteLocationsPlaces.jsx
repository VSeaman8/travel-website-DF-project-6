import { Link } from "react-router-dom";

import { getLocations } from "../utilityFunctions/SaveLocations.jsx";
import Place from "./FavouriteLocationsPlaces";

const FavouriteLocationsPlaces = () => {
  const locations = getLocations();

  return (
    <div className="location-container">
      {locations.map((location, index) => (
        <Link key={index} to={`/Weather/${location}`}>
          <Place location={location} />
        </Link>
      ))}
    </div>
  );
};

export default FavouriteLocationsPlaces;
