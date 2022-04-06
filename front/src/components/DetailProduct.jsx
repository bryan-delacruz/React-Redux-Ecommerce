import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductbyId } from "../redux/action";

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

  useEffect(() => {
    dispatch(getProductbyId(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>cargando...</div>;
  } else {
    return (
      <div className={stl.detail}>
        <img src="" alt="" />
        <div>
          <div>
            <div>{product.brand}</div>
            <div>{product.name}</div>
          </div>
          <div>
            <div>{product.rating}</div>
            <div>{product.review}</div>
          </div>
          <p>{product.description}</p>
          <div>
            <div>{product.price}</div>
            <div>{product.countInStock}</div>
            <div>
              <button className={stl.btn_minus} onClick={() => aumentar()}>
                +
              </button>
              <span>{count}</span>
              <button className={stl.btn_plus} onClick={() => disminuir()}>
                -
              </button>
            </div>
            <div>
              <button>Agregar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailProduct;
