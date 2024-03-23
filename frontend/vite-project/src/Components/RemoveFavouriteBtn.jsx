const RemoveFavouriteBtn = ({ location, favourite, onRemoveFavourite }) => {
  const isFavourite = favourite ? favourite.includes(location) : false;

  const handleButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isFavourite) {
      onRemoveFavourite(location);
    }
  };

  return (
    <button className="Removefavourite-btn" onClick={handleButtonClick}>
      Remove
    </button>
  );

  //return <button className="Removefavourite-btn">Remove</button>;
};

export default RemoveFavouriteBtn;
