// Formats API date data
export const formatDate = (dt_txt) => {
  const date = new Date(dt_txt);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

// converts kelvin to celsius
export const kelvinToCelsius = (temp) => {
  return Math.round(temp - 273.15);
};
