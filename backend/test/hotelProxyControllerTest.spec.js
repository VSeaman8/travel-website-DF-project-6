import { expect } from "chai";
import axios from "axios";
import getHotelData from "../controllers/hotelProxyController.js";

// Test Code for Dummy hotel Data

describe("getHotelData", () => {
  it("should return hotel data", async () => {
    // Act
    const data = await getHotelData();

    // Assert
    expect(data).to.have.property("data");
    expect(data.data[0]).to.have.property("title");
    expect(data.data[0]).to.have.property("primaryInfo");
    expect(data.data[0]).to.have.property("secondaryInfo");
    expect(data.data[0]).to.have.property("cardPhotos");
  });
});

// Test code for Hotel API when new API is found
/*describe("getHotelData", () => {
  it("should return hotel data for a given city", async () => {
    // Arrange
    const city = "London UK";

    // Act
    let data;
    try {
      data = await getHotelData(city);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response.status, error.response.statusText);
      } else {
        console.error(error);
      }
      return;
    }

    // Assert
    expect(data).to.have.property("hotels");
    expect(data.hotels[0]).to.have.property("title");
    expect(data.hotels[0]).to.have.property("primaryInfo");
    expect(data.hotels[0]).to.have.property("secondaryInfo");
    expect(data.hotels[0]).to.have.property("cardPhotos");
  });
});*/
