import fetch from "node-fetch";

const getMapData = async (lat, lon) => {
  const response = await fetch(
    `https://api.tomtom.com/search/2/reverseGeocode/${lat}%2C${lon}.json?key=${process.env.TOMTOM_API_KEY}`
  );
  const data = await response.json();
  return data;
};

export default getMapData;
