import WeatherCurrentDay from "../components/WeatherCurrentDay";
import WeatherForecast from "../components/WeatherForecast";

const WeatherContainer = ({ weatherData }) => {
  if (!weatherData) {
    return <div>You guessed it the weatherData is undefined</div>;
  }

  const { currentDayData, forecastData } = weatherData;
  return (
    <div className="weathercontainer">
      <WeatherCurrentDay currentDayData={currentDayData} />
      <WeatherForecast forecastData={forecastData} />
    </div>
  );
};

export default WeatherContainer;
