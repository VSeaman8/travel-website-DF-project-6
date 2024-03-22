import { Link } from "react-router-dom";

import Place from "./FavouriteLocationsPlaces";

const FavouriteLocationsPlaces = ({
  favourite,
  onAddFavourite,
  onRemoveFavourite,
}) => {
  return (
    <div className="location-container">
      {favourite.map((location, index) => (
        <Link key={index} to={`/location/${location}`}>
          <Place
            location={location}
            favourite={favourite}
            onAddFavourite={onAddFavourite}
            onRemoveFavourite={onRemoveFavourite}
          />
        </Link>
      ))}
    </div>
  );
};

export default FavouriteLocationsPlaces;
