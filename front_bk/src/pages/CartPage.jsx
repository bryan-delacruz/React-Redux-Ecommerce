import React from "react";
import stl from "../css/CartPage.module.css";
import { useSelector } from "react-redux";
import Item from "../components/Item";

const CartPage = () => {
  let cart = useSelector((state) => state.cart);

  return (
    <div className={stl.itemContainer}>
      {cart.length > 0 ? (
        cart.map((item) => {
          return <Item key={item.id} id={item.id} cantidad={item.cantidad} />;
        })
      ) : (
        <div>There aren't product added yet</div>
      )}
    </div>
  );
};

export default CartPage;
