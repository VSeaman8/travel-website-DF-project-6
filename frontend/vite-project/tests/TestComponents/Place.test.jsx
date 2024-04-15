import { render } from "@testing-library/react";
import Place from "../../src/components/Place";

describe("Place", () => {
  it("renders 'Remove' button and correctly formats the 'location' prop", () => {
    // Arrange
    const onRemoveFavourite = () => {};
    const favourite = ["location1", "location2"];
    const location = "location1";

    const { getByText } = render(
      <Place
        location={location}
        favourite={favourite}
        onRemoveFavourite={onRemoveFavourite}
      />
    );

    // Act
    // Nothing to do here as we're not simulating any user interactions

    // Assert
    // Check that 'Remove' button is rendered
    expect(document.body.contains(getByText("Remove"))).toBe(true);

    // Check that the 'location' prop is correctly formatted
    expect(document.body.contains(getByText("Location1"))).toBe(true);
  });

  it("renders 'Loading...' when 'location' is not provided", () => {
    // Arrange
    const onRemoveFavourite = () => {};
    const favourite = ["location1", "location2"];

    const { getByText } = render(
      <Place favourite={favourite} onRemoveFavourite={onRemoveFavourite} />
    );

    // Act
    // Nothing to do here as we're not simulating any user interactions

    // Assert
    // Check that 'Loading...' is rendered
    expect(document.body.contains(getByText("Loading..."))).toBe(true);
  });
});
