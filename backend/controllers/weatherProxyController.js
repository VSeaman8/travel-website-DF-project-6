import axios from "axios";

const getWeatherData = async (location) => {
  if (!location) {
    console.error("No location provided");
    return;
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.WEATHER_API_KEY}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    return {};
  }
};

export default getWeatherData;
