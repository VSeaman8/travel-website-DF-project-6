const LocationFavouriteBtn = ({
  location,
  favourite,
  onAddFavourite,
  onRemoveFavourite,
}) => {
  const isFavourite = favourite.includes(location);

  const handleButtonClick = () => {
    if (isFavourite) {
      onRemoveFavourite(location);
    } else {
      onAddFavourite(location);
    }
  };

  return (
    <button className="locationfavourite-btn" onClick={handleButtonClick}>
      {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
};
/*
const LocationFavouriteBtn = () => {
  return <button className="locationfavourite-btn">Add to Favourites</button>;
};*/

export default LocationFavouriteBtn;
