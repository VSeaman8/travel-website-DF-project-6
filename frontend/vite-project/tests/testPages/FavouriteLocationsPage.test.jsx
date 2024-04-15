import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FavouriteLocationsPage from "../../src/pages/FavouriteLocationsPage";

describe("FavouriteLocationsPage", () => {
  it("renders static text and the 'FavouriteLocationsPlaces' component with the correct props", () => {
    // Arrange
    const setSelectLocation = () => {};
    const favourite = ["location1", "location2"];
    const onAddFavourite = () => {};
    const onRemoveFavourite = () => {};

    const { getByText } = render(
      <Router>
        <FavouriteLocationsPage
          setSelectLocation={setSelectLocation}
          favourite={favourite}
          onAddFavourite={onAddFavourite}
          onRemoveFavourite={onRemoveFavourite}
        />
      </Router>
    );

    // Act
    // Nothing to do here as we're not simulating any user interactions

    // Assert
    // Check that static text is rendered
    expect(document.body.contains(getByText("hello"))).toBe(true);

    // Check that 'FavouriteLocationsPlaces' is rendered with the correct props
    // Check for the names of the locations instead of "FavouriteLocationsPlaces text"
    expect(document.body.contains(getByText("Location1"))).toBe(true);
    expect(document.body.contains(getByText("Location2"))).toBe(true);
  });
});
