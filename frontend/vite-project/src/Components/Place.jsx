import RemoveFavouriteBtn from "./RemoveFavouriteBtn.jsx";

const Place = ({ location, favourite, onRemoveFavourite }) => {
  return (
    <div className="place-container favourite-page">
      <RemoveFavouriteBtn
        location={location}
        favourite={favourite}
        onRemoveFavourite={onRemoveFavourite}
      />
      <h3 className="location-decoration">
        {location
          ? location.charAt(0).toUpperCase() + location.slice(1)
          : "Loading..."}{" "}
      </h3>
    </div>
  );
};
export default Place;
