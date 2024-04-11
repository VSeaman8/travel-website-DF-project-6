import { formatDate, kelvinToCelsius } from "./WeatherFormatingFunction";

const processWeatherData = (result) => {
  if (!result || !result.list || result.list.length === 0) {
    console.error("No weather data available");
    return;
  }

  const currentDayData = {
    day: formatDate(result.list[0].dt_txt),
    temperature: kelvinToCelsius(result.list[0].main.temp),
    weather: result.list[0].weather[0].description,
    icon: result.list[0].weather[0].icon,
  };

  const dayIndices = getDayIndices(result);
  const forecastData = dayIndices.slice(1).map((index) => {
    const item = result.list[index];
    return {
      day: formatDate(item.dt_txt),
      temperature: kelvinToCelsius(item.main.temp),
      weather: item.weather[0].description,
      icon: item.weather[0].icon,
    };
  });

  const { lat, lon } = result.city.coord;

  return { currentDayData, forecastData, lat, lon };
};

const getDayIndices = (result) => {
  let dayIndices = [0];
  let currentDayData = result.list[0].dt_txt.slice(8, 10);

  for (let i = 1; i < result.list.length; i++) {
    let day = result.list[i].dt_txt.slice(8, 10);
    let hour = result.list[i].dt_txt.slice(11, 13);

    if (day !== currentDayData && hour === "15") {
      dayIndices.push(i);
      currentDayData = day;

      if (dayIndices.length === 5) {
        break;
      }
    }
  }

  return dayIndices;
};
export default processWeatherData;
