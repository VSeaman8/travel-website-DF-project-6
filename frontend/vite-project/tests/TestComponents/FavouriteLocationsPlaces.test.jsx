import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FavouriteLocationsPlaces from "../../src/components/FavouriteLocationsPlaces.jsx";

describe("FavouriteLocationsPlaces", () => {
  it("renders a Place for each favourite location and calls setSelectLocation on click", () => {
    // Arrange
    const setSelectLocation = () => {};
    let favourite = ["Rivendale", "Mordor"];

    const { getByText, rerender } = render(
      <MemoryRouter>
        <FavouriteLocationsPlaces
          setSelectLocation={setSelectLocation}
          favourite={favourite}
        />
      </MemoryRouter>
    );

    // Act
    fireEvent.click(getByText("Rivendale"));

    // Assert
    favourite.forEach((location) => {
      expect(document.body.contains(getByText(location))).toBe(true);
    });

    // Update favourite and re-render
    favourite = ["Shire", "Gondor"];
    rerender(
      <MemoryRouter>
        <FavouriteLocationsPlaces
          setSelectLocation={setSelectLocation}
          favourite={favourite}
        />
      </MemoryRouter>
    );

    // Assert
    favourite.forEach((location) => {
      expect(document.body.contains(getByText(location))).toBe(true);
    });
  });
});
