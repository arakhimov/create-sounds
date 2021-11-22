import React from "react";
import "./product.css";

const Product = ({ name, url }) => {
  return (
    <section className="product">
      <img src={url} alt={name} width="200" height="200" />
      <h2>{name}</h2>
    </section>
  );
};

export default Product;
