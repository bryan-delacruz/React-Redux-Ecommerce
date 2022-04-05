import React from "react";

import stl from "../css/Card.module.css";

const Card = ({ id, name, image, rating, numReviews, price, countInStock }) => {
  return (
    <div className={stl.card}>
      <img src={`http://localhost:5000${image}`} alt={`img-${name}`} />
      <h4>{name}</h4>
      <div>
        <div>
          Raiting
          <br />
          {rating}
        </div>
        <div>
          Reviews
          <br />
          {numReviews}
        </div>
        <div>
          Stock
          <br />
          {countInStock}
        </div>
        <div>
          Price
          <br />
          <b>{price}</b>
        </div>
      </div>
      <div>
        <button className={stl.btn_info}>Ver más</button>
        <button  className={stl.btn_add}>Agregar</button>
      </div>
    </div>
  );
};

export default Card;
