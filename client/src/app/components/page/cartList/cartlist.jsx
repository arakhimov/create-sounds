import React from "react";
import { useSelector } from "react-redux";
import { getCartProducts } from "../../../store/cart";
import CartProduct from "../../ui/cartProduct/cartProduct";

const CartList = () => {
  const cartProducts = useSelector(getCartProducts());

  return (
    <ul className="list-group p-0 me-4">
      {cartProducts.map(({ product, amount }) => (
        <li
          key={product._id}
          className="list-group-item bg-transparent border-0 p-0 mb-2"
        >
          <CartProduct product={product} amount={amount} />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
