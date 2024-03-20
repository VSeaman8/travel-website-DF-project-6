import WeatherCurrentDay from "../components/WeatherCurrentDay.jsx";
import WeatherForecast from "../components/WeatherForecast.jsx";

const WeatherContainer = ({ locationName, weatherData }) => {
  return (
    <div>
      <WeatherCurrentDay location={locationName} weatherData={weatherData} />
      <WeatherForecast location={locationName} weatherData={weatherData} />
    </div>
  );
};

export default WeatherContainer;
