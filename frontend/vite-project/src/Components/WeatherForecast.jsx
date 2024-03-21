import WeatherForecastDay from "./WeatherForecastDay.jsx";

const WeatherForecast = ({ forecastData }) => {
  console.log(forecastData);

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
