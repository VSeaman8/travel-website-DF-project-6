import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FetchApiData from "./FetchApiData";

import processWeatherData from "./ProcessWeatherData";

const NavigateWithData = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await FetchApiData(location);
      const processedResult = processWeatherData(result);
      setWeatherData(processedResult);
    };
    fetchData();
  }, [location]);

  useEffect(() => {
    if (weatherData) {
      navigate(`/location/${location}`, { state: { weatherData } });
    }
  }, [weatherData, navigate, location]);

  return null;
};

export default NavigateWithData;
