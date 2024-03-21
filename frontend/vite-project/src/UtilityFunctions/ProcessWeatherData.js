import { formatDate, kelvinToCelsius } from "./WeatherFormatingFunction";

const processWeatherData = (result) => {
  if (!result.list || result.list.length === 0) {
    console.error("No weather data available");
    return;
  }

  const currentData = {
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

  return { currentData, forecastData };
};

const getDayIndices = (result) => {
  let dayIndices = [0];
  let currentDay = result.list[0].dt_txt.slice(8, 10);

  for (let i = 1; i < result.list.length; i++) {
    let day = result.list[i].dt_txt.slice(8, 10);
    let hour = result.list[i].dt_txt.slice(11, 13);

    if (day !== currentDay && hour === "15") {
      dayIndices.push(i);
      currentDay = day;

      if (dayIndices.length === 5) {
        break;
      }
    }
  }

  return dayIndices;
};
export default processWeatherData;
