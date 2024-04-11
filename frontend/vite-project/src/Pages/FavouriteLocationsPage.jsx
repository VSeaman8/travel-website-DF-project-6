import FavouriteLocationsPlaces from "../components/FavouriteLocationsPlaces.jsx";
import "./FavouriteLocationsPage.css";

const FavouriteLocationsPage = ({
  setSelectLocation,
  favourite,
  onAddFavourite,
  onRemoveFavourite,
}) => {
  return (
    <div className="favouriteLocation-container">
      <h2>hello</h2>
      <h2>Telling you about ...</h2>
      <h1>Favourite Locations</h1>
      <h4 className="click-name">Click name to view info</h4>
      <FavouriteLocationsPlaces
        setSelectLocation={setSelectLocation}
        favourite={favourite}
        onAddFavourite={onAddFavourite}
        onRemoveFavourite={onRemoveFavourite}
      />
    </div>
  );
};

export default FavouriteLocationsPage;
