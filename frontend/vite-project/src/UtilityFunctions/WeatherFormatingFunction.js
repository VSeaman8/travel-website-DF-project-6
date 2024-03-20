// Formats API date data
const formatDate = (dt_txt) => {
  const date = new Date(dt_txt);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

// converts kelvin to celsius
const kelvinToCelsius = (temp) => {
  return Math.round(temp - 273.15);
};
// sends data on to processing
const weatherFormatingFunction = (data) => {
  return data.map((item) => ({
    ...item,
    dt_txt: formatDate(item.dt_txt),
    main: {
      ...item.main,
      temp: kelvinToCelsius(item.main.temp),
    },
  }));
};
export default weatherFormatingFunction;
