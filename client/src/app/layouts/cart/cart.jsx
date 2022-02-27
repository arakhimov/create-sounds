import React from "react";
import CartList from "../../components/page/cartList/cartlist";
import SummaryPanel from "../../components/ui/summaryPanel/summaryPanel";

const Cart = () => {
  return (
    <>
      <h1>Корзина</h1>
      <div className="d-flex">
        <CartList />
        <SummaryPanel />
      </div>
    </>
  );
};

export default Cart;
