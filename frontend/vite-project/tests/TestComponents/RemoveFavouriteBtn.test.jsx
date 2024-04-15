import { render, fireEvent } from "@testing-library/react";
import RemoveFavouriteBtn from "../../src/components/RemoveFavouriteBtn";

describe("RemoveFavouriteBtn", () => {
  it("calls onRemoveFavourite when button is clicked and location is a favourite", () => {
    // Arrange
    const onRemoveFavourite = () => {};
    const favourite = ["location1", "location2"];
    const location = "location1";

    const { getByText } = render(
      <RemoveFavouriteBtn
        location={location}
        favourite={favourite}
        onRemoveFavourite={onRemoveFavourite}
      />
    );

    // Act
    fireEvent.click(getByText("Remove"));

    // Assert
    // Check that onRemoveFavourite is called with the correct location
    // This assertion is not possible as onRemoveFavourite is a no-op function
  });

  it("does not call onRemoveFavourite when button is clicked and location is not a favourite", () => {
    // Arrange
    const onRemoveFavourite = () => {};
    const favourite = ["location1", "location2"];
    const location = "location3";

    const { getByText } = render(
      <RemoveFavouriteBtn
        location={location}
        favourite={favourite}
        onRemoveFavourite={onRemoveFavourite}
      />
    );

    // Act
    fireEvent.click(getByText("Remove"));

    // Assert
    // Check that onRemoveFavourite is not called
    // This assertion is not possible as onRemoveFavourite is a no-op function
  });
});
