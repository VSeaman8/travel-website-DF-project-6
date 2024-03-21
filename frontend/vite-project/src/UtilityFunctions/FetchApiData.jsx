import axios from "axios";

const FetchApiData = async (location) => {
  if (!location) {
    console.error("No location provided");
    return;
  }
  try {
    const response = await axios.get(
      `http://localhost:5000/api/weather/${location}`
      //`http://localhost:${process.env.PORT}/api/weather/${location}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`There was a problem with the fetch operation`, error);
    return {};
  }
};

export default FetchApiData;
