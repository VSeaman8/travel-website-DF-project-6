import { useState, useEffect } from "react";

//import { getLocations } from "../utilityFunctions/SaveLocations.jsx";

const LocationFavouriteBtn = ({ location }) => {
  /* const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourites = getLocations();
    setIsFavourite(favourites.includes(location));
  }, [location]);

  const handleButtonClick = () => {
    let favourites = getLocations();

    if (isFavourite) {
      favourites = favourites.filter((favourite) => favourite !== location);
    } else if (!favourites.includes(location)) {
      favourites = [...favourites, location];
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
    setIsFavourite(!isFavourite);
  };*/

  return (
    <button className="locationfavourite-btn" onClick={handleButtonClick}>
      {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
};

export default LocationFavouriteBtn;
