// connect to back end for all locations
export const getFavouriteLocations = async (userId) => {
  const response = await fetch(
    `http://localhost:4003/api/user/${userId}/favourites`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
// connect to backend for adding to locations
export const addFavouriteLocation = async (userId, location) => {
  const response = await fetch(
    `http://localhost:4003/api/user/${userId}/favourites`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location }),
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

// connect to backend for removing a location
export const removeFavouriteLocation = async (userId, location) => {
  const response = await fetch(
    `http://localhost:4003/api/user/${userId}/favourites`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location }),
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
