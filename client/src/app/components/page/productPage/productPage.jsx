/* eslint-disable indent */
/* eslint-disable multiline-ternary */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addProduct } from "../../../store/cart";
import { getProductById } from "../../../store/products";
import { getAuthStatus } from "../../../store/users";
import Button from "../../common/button/button";
import "./productPage.css";

const ProductPage = () => {
  const history = useHistory();
  const { productId } = useParams();
  const product = useSelector(getProductById(productId));
  const authStatus = useSelector(getAuthStatus());
  const dispatch = useDispatch();

  const handleMoveToEditPage = () => {
    history.push(`/edit/${productId}`);
  };

  return (
    <div className="productPage">
      <img
        src={product.url}
        alt={product.name}
        width="400"
        height="400"
        className="productPage__image"
      />
      <div className="productPage__wrapper">
        <p className="productPage__description">{product.description}</p>
        <Button
          label="Добавить в корзину"
          onClick={() => dispatch(addProduct(product))}
        />
        {authStatus && authStatus.userId !== "undefined" && (
          <Button onClick={handleMoveToEditPage} label="Редактировать" />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
