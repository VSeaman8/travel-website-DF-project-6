const WeatherCurrentDay = ({ currentDayData }) => {
  if (!currentDayData) {
    return <div>Loading...</div>;
  }

  const { day, icon, temperature, weather } = currentDayData;

  return (
    <div className="current-weather current-day">
      <div className="left-side-weather">
        <h1 className="current-date">{day}</h1>
        <img
          src={`../assets/weather-icons/${icon}.svg`}
          className="weather-icon"
        />
      </div>
      <div className="right-side-weather">
        <p>{temperature}°C</p>
        <p>{weather}</p>
      </div>
    </div>
  );
};

export default WeatherCurrentDay;
