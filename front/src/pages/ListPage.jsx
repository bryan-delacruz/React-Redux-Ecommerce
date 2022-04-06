import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import stl from "../css/ListPage.module.css";

const ListPage = () => {
  let products = useSelector((state) => state.products);

  return (
    <div className={stl.cardContainer}>
      {products?.map((p) => (
        <Card
          key={p._id}
          id={p._id}
          name={p.name}
          image={p.image}
          rating={p.rating}
          numReviews={p.numReviews}
          price={p.price}
          countInStock={p.countInStock}
        >
          {p._id}
        </Card>
      ))}
    </div>
  );
};

export default ListPage;
