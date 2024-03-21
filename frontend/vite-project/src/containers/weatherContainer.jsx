import WeatherCurrentDay from "../Components/WeatherCurrentDay";
import WeatherForecast from "../Components/WeatherForecast";

const WeatherContainer = ({ weatherData }) => {
  const { currentDayData, forecastData } = weatherData;
  return (
    <div>
      <WeatherCurrentDay currentDayData={currentDayData} />
      <WeatherForecast forecastData={forecastData} />
    </div>
  );
};

export default WeatherContainer;
