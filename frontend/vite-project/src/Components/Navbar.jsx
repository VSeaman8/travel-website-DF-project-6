import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavigateWithData from "../UtilityFunctions/NavigateWithData";
import SearchEngine from "./searchEngine";

const Navbar = ({ favourite, selectedLocation, setSelectedLocation }) => {
  const location = useLocation();

  const handleLocationClick = (chosenLocation) => {
    setSelectedLocation(chosenLocation);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg ">
        <Link className="navbar-brand" to="/">
          Tell Me About.....
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Log In
              </Link>
            </li>
            {favourite && favourite.length > 0 && (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Favourite Locations
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {favourite.map((chosenLocation, index) => (
                    <Link
                      key={index}
                      onClick={() => handleLocationClick(chosenLocation)}
                      className="dropdown-item"
                      to={`/location/${chosenLocation}`}
                    >
                      {chosenLocation}
                    </Link>
                  ))}
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/favouritelocations">
                    All Saved Locations
                  </Link>
                </div>
              </li>
            )}
          </ul>
          {location.pathname !== "/" && <SearchEngine inNavbar />}
        </div>
      </nav>
      {selectedLocation && <NavigateWithData location={selectedLocation} />}
    </div>
  );
};

export default Navbar;
