import { expect } from "chai";
import getWeatherData from "../controllers/weatherProxyController.js";

describe("getWeatherData", function () {
  it("Return Correct Weather Data", async function () {
    // Arrange
    const location = "Dublin";

    // Act
    const data = await getWeatherData(location);

    // Assert
    expect(data).to.have.property("list");
  });
});
