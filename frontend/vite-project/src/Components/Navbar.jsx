//import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
//import { getLocations } from "../utilityFunctions/SaveLocations.jsx";
//import SearchEngine from "./SearchEngine";

const Navbar = () => {
  /*const location = useLocation();
  const [favouriteLocations, setFavouriteLocations] = useState([]);

  useEffect(() => {
    const updateFavourites = () => {
      const location = getLocations();
      setFavouriteLocations(location);
      console.log(location);
    };

    window.addEventListener("storage", updateFavourites);
    updateFavourites();

    return () => {
      window.removeEventListener("storage", updateFavourites);
    };
  }, [getLocations]);*/

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
            {/*
            {favouriteLocations && favouriteLocations.length > 0 && (
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
                  {favouriteLocations.map((location, index) => (
                    <Link
                      key={index}
                      className="dropdown-item"
                      to={`/Weather/${location}`}
                    >
                      {location}
                    </Link>
                  ))}
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/FavouriteLocations">
                    All Saved Locations
                  </Link>
                </div>
              </li>
                  )}
                  */}
          </ul>
          {/*  {location.pathname !== "/" && <SearchEngine inNavbar />}*/}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
