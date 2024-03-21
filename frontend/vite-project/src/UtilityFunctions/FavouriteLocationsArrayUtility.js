const getLocations = () => {
  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  return favourites.filter((location) => typeof location === "string");
};

const addLocation = (location) => {
  let favourites = getLocations();
  if (!favourites.includes(location)) {
    favourites.push(location);
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }
};

const removeLocation = (location) => {
  let favourites = getLocations();
  favourites = favourites.filter((favourite) => favourite !== location);
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

export { addLocation, getLocations, removeLocation };
