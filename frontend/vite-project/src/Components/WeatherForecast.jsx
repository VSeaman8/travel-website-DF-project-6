import WeatherForecastDay from "./WeatherForecastDay.jsx";

const WeatherForecast = ({ weatherData }) => {
  console.log(weatherData);
  const { forecastData } = weatherData;

  if (!forecastData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="weather-grid">
      {forecastData.map((dayData, index) => (
        <WeatherForecastDay key={index} {...dayData} />
      ))}
    </div>
  );
};

export default WeatherForecast;
