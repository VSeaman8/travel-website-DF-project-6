import WeatherCurrentDay from "../Components/WeatherCurrentDay";
import WeatherForecast from "../Components/WeatherForecast";

const WeatherContainer = ({ weatherData }) => {
  return (
    <div>
      <WeatherCurrentDay weatherData={weatherData} />
      <WeatherForecast weatherData={weatherData} />
    </div>
  );
};

export default WeatherContainer;
