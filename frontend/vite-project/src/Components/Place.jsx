import LocationFavouriteBtn from "./LocationFavouriteBtn.jsx";
import "./Place.css";

const Place = ({ location, favourite, onAddFavourite, onRemoveFavourite }) => {
  return (
    <div className="place-container favourite-page">
      <LocationFavouriteBtn
        location={location}
        favourite={favourite}
        onAddFavourite={onAddFavourite}
        onRemoveFavourite={onRemoveFavourite}
      />
      <h3 className="location-decoration">
        {location.charAt(0).toUpperCase() + location.slice(1)}{" "}
      </h3>
    </div>
  );
};

export default Place;
