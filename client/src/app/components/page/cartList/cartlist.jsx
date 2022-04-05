/* eslint-disable max-len */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeProductAmount,
  getCartProducts,
  removeProduct
} from "../../../store/cart";
import "./cartList.css";

const CartList = () => {
  const cartProducts = useSelector(getCartProducts());
  const dispatch = useDispatch();

  return (
    <table className="cartList">
      <thead className="cartList__header">
        <tr className="cartList__row">
          <th colSpan="2" className="cartList__header-item" scope="col">
            Инструмент
          </th>
          <th className="cartList__header-item" scope="col">
            Наличие
          </th>
          <th className="cartList__header-item" scope="col">
            Цена
          </th>
          <th className="cartList__header-item" scope="col">
            Количество
          </th>
          <th colSpan="2" className="cartList__header-item" scope="col">
            Сумма
          </th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map(({ product, amount }) => (
          <tr className="cartList__item cartList__row" key={product._id}>
            <td className="cartList__cell">
              <img
                src={product.url}
                alt={product.name}
                width="100"
                height="100"
                className="cartList__image"
              />
            </td>
            <td className="cartList__cell cartList__cell--description">
              <Link className="cartLists__link" to={"/products/" + product._id}>
                <h4 className="cartList__title m-0 me-4">{product.name}</h4>
              </Link>
              <p className="cartList__id-info">{`Код товара: ${product._id}`}</p>
            </td>
            <td className="cartList__cell">
              <p className="cartList__amount-description">Доступно к заказу:</p>
              <p className="cartList__amount">{`${product.amount} шт.`}</p>
            </td>
            <td className="cartList__cell">
              <p className="cartList__cost mb-0">
                <span className="cartList__cost-value">{product.cost}</span>{" "}
                ₽/шт.
              </p>
            </td>
            <td className="cartList__cell">
              <div className="cartList__button-wrapper p-0">
                <button
                  className="cartList__button btn"
                  type="button"
                  data-method="add"
                  onClick={() =>
                    dispatch(changeProductAmount(product._id, "add"))
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="cartList__button-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                  </svg>
                </button>
                <p className="cartList__amount-handler">{amount}</p>
                <button
                  className="cartList__button btn"
                  type="button"
                  data-method="subtrack"
                  onClick={() =>
                    dispatch(changeProductAmount(product._id, "subtrack"))
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="cartList__button-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                  </svg>
                </button>
              </div>
            </td>
            <td className="cartList__cell">
              <p className="cartList__cost mb-0">
                <span className="cartList__cost-value">
                  {product.cost * amount}
                </span>{" "}
                ₽
              </p>
            </td>
            <td>
              <button
                className="cartList__button btn"
                type="button"
                onClick={() => dispatch(removeProduct(product._id))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="cartList__button-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartList;
