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
        <button className={stl.btn_info}>See more</button>
        <button
          className={countInStock > 0 ? stl.btn_add : stl.btn_disable}
          onClick={() => agregar()}
          disabled={countInStock > 0 ? false : true}
        >
          {countInStock > 0 ? "Add item to cart" : "Sin Stock"}
        </button>
      </div>
    </div>
  );
};

export default Card;
