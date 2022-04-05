/* eslint-disable max-len */
/* eslint-disable multiline-ternary */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../../components/page/cartList/cartList";
import SummaryPanel from "../../components/ui/summaryPanel/summaryPanel";
import { cleanCart, getCartSummaryCost } from "../../store/cart";
import history from "../../utils/history";
import "./cart.css";

const Cart = () => {
  const summaryCost = useSelector(getCartSummaryCost());
  const dispatch = useDispatch();

  const handleRedirect = (e) => {
    e.preventDefault();
    history.push("/products");
  };

  const handleClearCart = () => {
    const confirmation = confirm(
      "Вы точно хотите удалить все данные из корзины?"
    );
    if (confirmation) {
      dispatch(cleanCart());
    }
  };

  return (
    <div className="cart">
      {summaryCost ? (
        <div className="cart__container cart__container--empty">
          <div className="cart__wrapper">
            <h2 className="cart__title">Корзина</h2>
            <button
              className="cart__button-clear btn"
              type="button"
              onClick={handleClearCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="cart__button-icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
              Очистить корзину
            </button>
          </div>
          <CartList />
          <SummaryPanel />
        </div>
      ) : (
        <div className="cart__container cart__container--full">
          <h2 className="cart__title">Корзина пуста</h2>
          <p className="cart__desccription">Ваша корзина покупок пуста</p>
          <p className="cart__description">
            Нажмите{" "}
            <a href="" className="cart__link" onClick={handleRedirect}>
              сюда
            </a>
            , для продолжения выбора
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
