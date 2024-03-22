import LocationFavouriteBtn from "./LocationFavouriteBtn.jsx";
import RemoveFavouriteBtn from "./RemoveFavouriteBtn.jsx";

const Place = ({ location, favourite, onAddFavourite, onRemoveFavourite }) => {
  return (
    <div className="place-container favourite-page">
      <RemoveFavouriteBtn />
      {/*<LocationFavouriteBtn
        location={location}
        favourite={favourite}
        onAddFavourite={onAddFavourite}
        onRemoveFavourite={onRemoveFavourite}
  />*/}
      <h3 className="location-decoration">
        {location
          ? location.charAt(0).toUpperCase() + location.slice(1)
          : "Loading..."}{" "}
      </h3>
    </div>
  );
};
export default Place;
