import PropTypes from "prop-types";
import React from "react";
import "./productPage.css";

const ProductPage = ({ name, url }) => {
  return (
    <section className="product">
      <img src={url} alt={name} width="200" height="200" />
      <h2>{name}</h2>
    </section>
  );
};

ProductPage.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default ProductPage;
