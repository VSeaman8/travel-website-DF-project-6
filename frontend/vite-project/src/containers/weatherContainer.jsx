import WeatherCurrentDay from "../Components/WeatherCurrentDay";
import WeatherForecast from "../Components/WeatherForecast";

const WeatherContainer = ({ weatherData }) => {
  if (!weatherData) {
    return <div>You guessed it the weatherData is undefined</div>;
  }

  const { currentDayData, forecastData } = weatherData;
  return (
    <div>
      <WeatherCurrentDay currentDayData={currentDayData} />
      <WeatherForecast forecastData={forecastData} />
    </div>
  );
};

export default WeatherContainer;
