import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/button/button";
import "./product.css";

const Product = ({ name, url, _id, cost, amount }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <section className="product">
      <Link className="products__link" to={"/products/" + _id}>
        <img
          src={url}
          alt={name}
          width="200"
          height="200"
          className="product__image"
        />
      </Link>
      <div className="product__wrapper">
        <Link className="products__link" to={"/products/" + _id}>
          <h2 className="product__title">{name}</h2>
        </Link>
        <p className="product__cost">
          <span className="product__cost-value">{cost}</span> ₽/шт.
        </p>
        <p className="product__unit">Арт. {_id}</p>
        <p className="product__amount">Количество: {amount} шт.</p>
      </div>
      <div className="product__button-wrapper">
        <Button label="В корзину" onClick={handleClick} />
      </div>
    </section>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  _id: PropTypes.string,
  cost: PropTypes.number,
  amount: PropTypes.number
};

export default Product;
