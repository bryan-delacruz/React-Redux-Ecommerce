import React from "react";
import { useSelector } from "react-redux";
import stl from "../css/Item.module.css";
import { addProduct, decreaseProduct, deleteProduct } from "../redux/action";
import { useDispatch } from "react-redux";

const Item = ({ id, cantidad }) => {
  const dispatch = useDispatch();

  let products = useSelector((state) => state.products);

  console.log(products);
  console.log(id);

  let item = products?.find((e) => e._id === id);

  const agregar = () => {
    dispatch(addProduct(id));
  };
  const desagregar = () => {
    dispatch(decreaseProduct(id));
  };

  const eliminar = () => {
    dispatch(deleteProduct(id));
  };

  return !item ? (
    <div>cargando...</div>
  ) : (
    <div className={stl.item}>
      <img src={`http://localhost:5000${item.image}`} alt="img" />
      <div className={stl.info}>
        <div className={stl.top}>
          <p>
            {item.brand} <br />
            {item.name}
          </p>
          <button onClick={() => eliminar()}>
            <b>x</b>
          </button>
        </div>
        <div className={stl.bot}>
          <p>{`S/${item.price}`}</p>
          <div>
            <button className={stl.btn_minus} onClick={() => agregar()}>
              +
            </button>
            <span>{cantidad}</span>
            <button className={stl.btn_plus} onClick={() => desagregar()}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
