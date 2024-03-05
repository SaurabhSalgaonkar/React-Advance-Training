const Card = (props) => {
  const { item, handleClick } = props;
  const { img, ratings, name } = item;
  return (
    <div className="card">
      <div className="logo">
        <img src={img}></img>
      </div>
      <div className="container">
        <div>{name}</div>
        <div>{ratings}</div>
      </div>
      {handleClick && (
        <div className="button-container">
          <button onClick={() => handleClick(item)}>ADD TO CART</button>
        </div>
      )}
    </div>
  );
};

export default Card;
