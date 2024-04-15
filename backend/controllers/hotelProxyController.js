// Hotel API discontinued. used Dummy hotel data
import axios from "axios";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

async function getHotelData() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.resolve(__dirname, "../dummy_data/dummyHotelData.json");

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData.data;
  } catch (error) {
    console.error(error);
  }
}

// Code for external api that has been discontinued
/*async function getHotelData(city) {
  const options = {
    method: "GET",
    url: "https://priceline-com.p.rapidapi.com/hotels/city/search",
    params: { q: city },
    headers: {
      "X-RapidAPI-Key": "7ce22d64d4mshc392f6243e7403ep194b43jsncf05f4488016",
      "X-RAPI-Host": "priceline-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}*/

export default getHotelData;
