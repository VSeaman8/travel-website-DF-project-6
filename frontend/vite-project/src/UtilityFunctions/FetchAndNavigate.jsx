/*import { useNavigate } from "react-router-dom";

const FetchAndNavigate = ({ location }) => {
  const navigate = useNavigate();
  const stuff = useFetchWeatherData(location);

  const navToLocation = () => {
    const { currentDayData, forecastData } = stuff;
    if (currentDayData && forecastData) {
      navigate("/Weather", {
        state: {
          location,
          weatherData: { currentDayData, forecastData },
        },
      });
    }
    return null;
  };

  return <>{navToLocation()}</>;
};

export default FetchAndNavigate;*/
