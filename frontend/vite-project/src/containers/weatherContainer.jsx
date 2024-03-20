import WeatherCurrentDay from "../Components/WeatherCurrentDay";
import WeatherForecast from "../Components/WeatherForecast";

const WeatherContainer = ({ locationName, weatherData }) => {
  return (
    <div>
      <WeatherCurrentDay location={locationName} weatherData={weatherData} />
      <WeatherForecast location={locationName} weatherData={weatherData} />
    </div>
  );
};

export default WeatherContainer;
