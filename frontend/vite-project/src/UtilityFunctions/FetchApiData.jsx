// Connection to API with Proxy - weather
import axios from "axios";

const FetchApiData = async (location) => {
  if (!location) {
    console.error("No location provided");
    return;
  }
  try {
    const response = await axios.get(
      `http://localhost:4003/api/weather/${location}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`There was a problem with the fetch operation`, error);
    return {};
  }
};

// Connection to Dummy data

/*import dummyWeatherData from "../assets/Data/dummyWeatherData.json";
const FetchApiData = async (location) => {
  console.log(`Fetching dummy weather for ${location}`);

  return dummyWeatherData;
};*/

// connection to api without proxy - weather (kept for short term)
/*import axios from "axios";

const FetchApiData = async (location) => {
  if (!location) {
    console.error("No location provided");
    return;
  }
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=82eead94890f3e9d0203a62caa188ff4`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`There was a problem with the fetch operation`, error);
    return {};
  }
};*/

export default FetchApiData;
