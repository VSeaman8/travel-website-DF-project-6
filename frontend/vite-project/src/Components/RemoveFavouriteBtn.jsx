const RemoveFavouriteBtn = ({ location, favourite, onRemoveFavourite }) => {
  /*const isFavourite = favourite.includes(location);

  const handleButtonClick = () => {
    if (isFavourite) {
      onRemoveFavourite(location);
    }
  };

  return (
    <button className="Removefavourite-btn" onClick={handleButtonClick}>
      Remove
    </button>
  );*/
  return <button className="Removefavourite-btn">Remove</button>;
};

export default RemoveFavouriteBtn;
