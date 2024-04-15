import { render } from "@testing-library/react";
import WeatherForecast from "../../src/components/WeatherForecast";

describe("WeatherForecast", () => {
  it("renders 'Loading...' when 'forecastData' is not provided", () => {
    // Arrange
    const forecastData = null;

    const { getByText } = render(
      <WeatherForecast forecastData={forecastData} />
    );

    // Act
    // Nothing to do here as we're not simulating any user interactions

    // Assert
    // Check that 'Loading...' is rendered
    expect(document.body.contains(getByText("Loading..."))).toBe(true);
  });

  it("renders a 'WeatherForecastDay' for each day's data when 'forecastData' is provided", () => {
    // Arrange
    const forecastData = [
      { day: "Monday", temperature: 20, weather: "Cloudy" },
      { day: "Tuesday", temperature: 22, weather: "Sunny" },
    ];

    const { getByText } = render(
      <WeatherForecast forecastData={forecastData} />
    );

    // Act
    // Nothing to do here as we're not simulating any user interactions

    // Assert
    // Check that a 'WeatherForecastDay' is rendered for each day's data
    expect(document.body.contains(getByText("Monday"))).toBe(true);
    expect(document.body.contains(getByText("Tuesday"))).toBe(true);
  });
});
