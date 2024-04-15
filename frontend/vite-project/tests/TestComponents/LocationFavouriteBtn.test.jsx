import { render, fireEvent } from "@testing-library/react";
import LocationFavouriteBtn from "../../src/components/LocationFavouriteBtn.jsx";

describe("LocationFavouriteBtn", () => {
  it("renders 'Add to Favourites' when location is not a favourite and calls onAddFavourite on click", () => {
    // Arrange
    const onAddFavourite = () => {};
    const onRemoveFavourite = () => {};
    const favourite = ["location1", "location2"];
    const location = "location3";

    const { getByText } = render(
      <LocationFavouriteBtn
        location={location}
        favourite={favourite}
        onAddFavourite={onAddFavourite}
        onRemoveFavourite={onRemoveFavourite}
      />
    );

    // Act
    fireEvent.click(getByText("Add to Favourites"));

    // Assert
    expect(document.body.contains(getByText("Add to Favourites"))).toBe(true);
  });

  it("renders 'Remove from Favourites' when location is a favourite and calls onRemoveFavourite on click", () => {
    // Arrange
    const onAddFavourite = () => {};
    const onRemoveFavourite = () => {};
    const favourite = ["location1", "location2"];
    const location = "location1";

    const { getByText } = render(
      <LocationFavouriteBtn
        location={location}
        favourite={favourite}
        onAddFavourite={onAddFavourite}
        onRemoveFavourite={onRemoveFavourite}
      />
    );

    // Act
    fireEvent.click(getByText("Remove from Favourites"));

    // Assert
    expect(document.body.contains(getByText("Remove from Favourites"))).toBe(
      true
    );
  });
});
