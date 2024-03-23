import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchEngine from "./searchEngine";

const Navbar = ({ favourite, selectedLocation, setSelectedLocation }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNonLocationLinkClick = (event) => {
    event.preventDefault();
    setSelectedLocation(null);
    navigate(route);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg ">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => handleNonLocationLinkClick("/")}
        >
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
              <Link
                className="nav-link"
                to="/"
                onClick={() => handleNonLocationLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                onClick={() => handleNonLocationLinkClick("/login")}
              >
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
                      onClick={() => setSelectedLocation(chosenLocation)}
                      className="dropdown-item"
                      to={`/location/${chosenLocation}`}
                    >
                      {chosenLocation}
                    </Link>
                  ))}
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/favouritelocations"
                    onClick={() =>
                      handleNonLocationLinkClick("/favouritelocations")
                    }
                  >
                    All Saved Locations
                  </Link>
                </div>
              </li>
            )}
          </ul>
          {location.pathname !== "/" && (
            <SearchEngine inNavbar setLocation={setSelectedLocation} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
