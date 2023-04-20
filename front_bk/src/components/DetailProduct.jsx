import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, getProductbyId } from "../redux/action";

import stl from "../css/DetailProduct.module.css";

const DetailProduct = () => {
  const { id } = useParams();
  let product = useSelector((state) => state.productById);

  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const aumentar = () => {
    if (product.countInStock >= count + 1) {
      setCount((e) => e + 1);
    }
  };
  const disminuir = () => {
    if (count > 1) {
      setCount((e) => e - 1);
    }
  };

  const agregarAlCarro = () => {
    dispatch(addToCart(id,count));
  };

  useEffect(() => {
    dispatch(getProductbyId(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>cargando...</div>;
  } else {
    return (
      <div className={stl.detail}>
        <img src={`http://localhost:5000${product.image}`} alt="img" />
        <div className={stl.container}>
          <div className={stl.brand}>
            <div>{product.brand}</div>
            <div>{product.name}</div>
          </div>
          <div className={stl.rating}>
            <div>Rating: {product.rating}</div>
            <div>Reviews: {product.numReviews}</div>
          </div>
          <p>{product.description}</p>
          <div className={stl.container_bot}>
            <div className={stl.price}>
              <div>
                {" "}
                <b>Price: S/{product.price}</b>
              </div>
            </div>
            <div className={stl.stock}>
              <div className={stl.mb}>Stock: {product.countInStock}</div>
              <div>
                <button className={stl.btn_minus} onClick={() => aumentar()}>
                  +
                </button>
                <span style={{ margin: "0px 5px" }}>{count}</span>
                <button className={stl.btn_plus} onClick={() => disminuir()}>
                  -
                </button>
              </div>
            </div>
            <button
              disabled={product.countInStock > 1 ? false : true}
              className={product.countInStock > 1 ? "" : stl.btn_disable}
              onClick={() => agregarAlCarro()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailProduct;
