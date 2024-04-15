import React, { useEffect, useState } from "react";
import axios from "axios";

// HotelCard Component
function HotelCard({ hotel }) {
  return (
    <div>
      <h2>{hotel.title}</h2>
      <p>{hotel.primaryInfo}</p>
      <p>{hotel.secondaryInfo}</p>
      <img
        src={hotel.cardPhotos[0].sizes.urlTemplate
          .replace("{width}", "500")
          .replace("{height}", "500")}
        alt="Hotel"
      />
      // Add more details as needed
    </div>
  );
}

// HotelContainer Component
function HotelContainer({ city }) {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://priceline-com.p.rapidapi.com/hotels/city/search",
      params: { q: city },
      headers: {
        "X-RapidAPI-Key": "7ce22d64d4mshc392f6243e7403ep194b43jsncf05f4488016",
        "X-RAPI-Host": "priceline-com.p.rapidapi.com",
      },
    };

    const fetchHotels = async () => {
      try {
        const response = await axios.request(options);
        setHotels(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHotels();
  }, [city]);

  return (
    <div>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelContainer;
