// Front to Backend Connection for all locations

// connect to back end for all locations
export const getFavouriteLocations = async (userId) => {
  console.log("getFavouriteLocations userId:", userId);
  const url = `http://localhost:4003/api/${userId}/locations`;
  console.log("url:", url);
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      userid: userId,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
// connect to backend for adding to locations
export const addFavouriteLocation = async (userId, location) => {
  const response = await fetch(
    `http://localhost:4003/api/${userId}/locations`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userid: userId,
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
    `http://localhost:4003/api/${userId}/locations`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        userid: userId,
      },
      body: JSON.stringify({ location }),
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
