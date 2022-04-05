import React from "react";
import { useDispatch } from "react-redux";

import stl from "../css/Card.module.css";
import { addProduct } from "../redux/action";

const Card = ({ id, name, image, rating, numReviews, price, countInStock }) => {
  const dispatch = useDispatch();

  const agregar = () => {
    dispatch(addProduct(id));
  };
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
          <b>
            Price
            <br />
            {price}
          </b>
        </div>
      </div>
      <div>
        <button className={stl.btn_info}>Ver más</button>
        <button className={stl.btn_add} onClick={() => agregar()}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Card;
