/* eslint-disable multiline-ternary */
import React from "react";
import { useSelector } from "react-redux";
import { getCartSummaryCost } from "../../../store/cart";
import "./summaryPanel.css";

const SummaryPanel = () => {
  const summaryCost = useSelector(getCartSummaryCost());

  return (
    <>
      <div className="summaryPanel">
        <p className="summaryPanel__cost">
          Итого:&nbsp;
          <span className="summaryPanel__cost-sum">{`${summaryCost}₽`}</span>
        </p>
        <button className="summaryPanel__button btn" type="button">
          Оформить заказ
        </button>
      </div>
    </>
  );
};

export default SummaryPanel;
