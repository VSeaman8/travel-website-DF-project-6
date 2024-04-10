import { expect } from "chai";

import getMapData from "../controllers/mapProxyController.js";

describe("getMapData", () => {
  it("should return map data for a given latitude and longitude", async () => {
    // Arrange
    const lat = 37.7749;
    const lon = -122.4194;

    // Act
    const data = await getMapData(lat, lon);

    // Assert

    expect(data).to.have.property("addresses");
    expect(data.addresses[0]).to.have.property("position");

    const [actualLat, actualLon] = data.addresses[0].position
      .split(",")
      .map(Number);
    expect(actualLat).to.be.closeTo(lat, 0.001);
    expect(actualLon).to.be.closeTo(lon, 0.001);
  });
});
