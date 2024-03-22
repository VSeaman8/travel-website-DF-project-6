import { Link } from "react-router-dom";

import Place from "./Place";

const FavouriteLocationsPlaces = ({
  setSelectLocation,
  favourite,
  onAddFavourite,
  onRemoveFavourite,
}) => {
  return (
    <div className="location-container">
      {favourite.map((location, index) => (
        <Link
          key={index}
          to={`/location/${location}`}
          onClick={() => setSelectLocation(location)}
        >
          <Place
            location={location}
            favourite={favourite}
            onAddFavourite={onAddFavourite}
            onRemoveFavourite={onRemoveFavourite}
          />
        </Link>
      ))}
      <Place />
    </div>
  );
};

export default FavouriteLocationsPlaces;
