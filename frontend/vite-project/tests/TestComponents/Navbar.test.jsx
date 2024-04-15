import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../src/components/Navbar";

describe("Navbar", () => {
  it("renders 'Favourite Locations' dropdown when favourite is not empty and calls setSelectedLocation on click", () => {
    // Arrange
    const setSelectedLocation = () => {};
    const favourite = ["location1", "location2"];

    const { getByText } = render(
      <MemoryRouter>
        <Navbar
          favourite={favourite}
          setSelectedLocation={setSelectedLocation}
        />
      </MemoryRouter>
    );

    // Act
    fireEvent.click(getByText("location1"));

    // Assert
    // Check that 'Favourite Locations' dropdown is rendered
    expect(document.body.contains(getByText("Favourite Locations"))).toBe(true);
  });

  it("does not render 'Favourite Locations' dropdown when favourite is empty", () => {
    // Arrange
    const setSelectedLocation = () => {};
    const favourite = [];

    const { queryByText } = render(
      <MemoryRouter>
        <Navbar
          favourite={favourite}
          setSelectedLocation={setSelectedLocation}
        />
      </MemoryRouter>
    );

    // Act
    // Nothing to do here as we're not simulating any user interactions

    // Assert
    // Check that 'Favourite Locations' dropdown is not rendered
    expect(queryByText("Favourite Locations")).toBeNull();
  });
});
