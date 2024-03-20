import { useState } from "react";
import "./searchEngine.css";

const SearchEngine = ({ inNavbar, setLocation }) => {
  const [search, setSearch] = useState("");

  const className = inNavbar ? "navbar-search" : "search-container";

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    setLocation(search);
  };

  return (
    <div className={className}>
      <form onSubmit={handleSearchSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="locationInput"
            placeholder="Enter Location"
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchEngine;
