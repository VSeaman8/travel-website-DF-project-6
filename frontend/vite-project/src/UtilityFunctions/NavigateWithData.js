import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FetchApiData from "./FetchApiData";

const NavigateWithData = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await FetchApiData(location);
      setWeatherData(result);
    };
    fetchData();
  }, [location]);

  useEffect(() => {
    if (weatherData) {
      navigate("/LocationPage", { state: { weatherData } });
    }
  }, [weatherData, navigate]);

  return null;
};

export default NavigateWithData;
