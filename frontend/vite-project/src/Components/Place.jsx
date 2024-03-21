import AddFavourite from "./AddFavourite.jsx";
import "./Place.css";

const Place = ({ location }) => {
  return (
    <div className="place-container favourite-page">
      <AddFavourite location={location} />
      <h3 className="location-decoration">
        {location.charAt(0).toUpperCase() + location.slice(1)}{" "}
      </h3>
    </div>
  );
};

export default Place;
