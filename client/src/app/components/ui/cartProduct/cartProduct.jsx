/* eslint-disable max-len */
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeProductAmount, removeProduct } from "../../../store/cart";
import "./cartProduct.css";

const CartProduct = ({ product, amount }) => {
  const { name, url, cost, _id } = product;
  const dispatch = useDispatch();

  return (
    <section className="cartProduct d-flex">
      <Link className="cartProduct__link" to={"/products/" + _id}>
        <img
          src={url}
          alt={name}
          width="100"
          height="100"
          className="cartProduct__image"
        />
      </Link>
      <div className="cartProduct__wrapper d-flex align-items-center">
        <div className="cartProduct__title-wrapper">
          <Link className="cartProducts__link" to={"/products/" + _id}>
            <h2 className="cartProduct__title mb-0 me-4">{name}</h2>
          </Link>
          <div className="me-4">
            <p className="cartProduct__subtitle mb-0">Артикул: </p>
            <p className="cartProduct__subtitle mb-0">{_id}</p>
          </div>
        </div>

        <p className="cartProduct__cost mb-0">
          <span className="cartProduct__cost-value">{cost}</span> ₽/шт.
        </p>
        <div className="cartProduct__button-wrapper p-0">
          <button
            className="cartProduct__button btn border"
            type="button"
            data-method="add"
            onClick={() => dispatch(changeProductAmount(_id, "add"))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
          </button>
          <p className="cartProduct__amount mb-0">{amount}</p>
          <button
            className="cartProduct__button btn border"
            type="button"
            data-method="subtrack"
            onClick={() => dispatch(changeProductAmount(_id, "subtrack"))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
            </svg>
          </button>
        </div>
        <button
          className="cartProduct__delete-button btn"
          type="button"
          title="Удалить"
          onClick={() => dispatch(removeProduct(_id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

CartProduct.propTypes = {
  product: PropTypes.object,
  amount: PropTypes.number
};

export default CartProduct;
