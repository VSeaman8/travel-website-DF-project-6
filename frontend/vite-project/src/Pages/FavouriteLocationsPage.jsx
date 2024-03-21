import FavouriteLocationsPlaces from "../Components/FavouriteLocationsPlaces.jsx";
import "./FavouriteLocationsPage.css";

const FavouriteLocations = ({
  favourite,
  onHandleFavourite,
  handleAddFavourite,
  handleRemoveFavourite,
}) => {
  return (
    <div className="favouriteLocation-container">
      <h2>Telling you about ...</h2>
      <h1>Favourite Locations</h1>
      <h4 className="click-name">Click name to view info</h4>
      <FavouriteLocationsPlaces
        favourite={favourite}
        onAddFavourite={handleAddFavourite}
        onRemoveFavourite={handleRemoveFavourite}
      />
    </div>
  );
};

export default FavouriteLocations;
