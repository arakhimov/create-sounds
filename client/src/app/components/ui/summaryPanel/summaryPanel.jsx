/* eslint-disable multiline-ternary */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart, getCartSummaryCost } from "../../../store/cart";
import "./summaryPanel.css";

const SummaryPanel = () => {
  const dispatch = useDispatch();
  const summaryCost = useSelector(getCartSummaryCost());

  return (
    <>
      {summaryCost === 0 ? (
        <p>Здесь пока ничего нет...</p>
      ) : (
        <div className="summaryPanel">
          <div className="summaryPanel__cost-wrapper">
            <p className="summaryPanel__cost">Итого:</p>
            <p className="summaryPanel__cost-sum">{`${summaryCost} ₽`}</p>
          </div>

          <button
            className="summaryPanel__button btn btn-primary mb-4"
            type="button"
          >
            Оформить заказ
          </button>
          <button
            className="summaryPanel__button btn btn-danger"
            type="button"
            onClick={() => dispatch(cleanCart())}
          >
            Очистить корзину
          </button>
        </div>
      )}
    </>
  );
};

export default SummaryPanel;
