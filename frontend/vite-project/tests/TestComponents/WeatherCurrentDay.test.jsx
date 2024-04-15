import { render } from "@testing-library/react";
import WeatherCurrentDay from "../../src/components/WeatherCurrentDay";

describe("WeatherCurrentDay", () => {
  it("renders 'Loading...' when 'currentDayData' is not provided", () => {
    // Arrange
    const currentDayData = null;

    const { getByText } = render(
      <WeatherCurrentDay currentDayData={currentDayData} />
    );

    // Act
    // Nothing to do here as we're not simulating any user interactions

    // Assert
    // Check that 'Loading...' is rendered
    expect(document.body.contains(getByText("Loading..."))).toBe(true);
  });

  it("renders weather report when 'currentDayData' is provided", () => {
    // Arrange
    const currentDayData = {
      day: "Monday",
      icon: "cloudy",
      temperature: 20,
      weather: "Cloudy",
    };

    const { getByText } = render(
      <WeatherCurrentDay currentDayData={currentDayData} />
    );

    // Act
    // Nothing to do here as we're not simulating any user interactions

    // Assert
    // Check that weather report is rendered
    expect(document.body.contains(getByText("Monday"))).toBe(true);
    expect(document.body.contains(getByText("20°C"))).toBe(true);
    expect(document.body.contains(getByText("Cloudy"))).toBe(true);
  });
});
