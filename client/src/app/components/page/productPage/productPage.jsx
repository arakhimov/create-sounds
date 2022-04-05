/* eslint-disable indent */
/* eslint-disable multiline-ternary */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addProduct } from "../../../store/cart";
import { getCategoryById } from "../../../store/categories";
import { getProductById } from "../../../store/products";
import { getAuthStatus } from "../../../store/users";
import Button from "../../common/button/button";
import Comments from "../../ui/comments/comments";
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

  const { url, name, _id, description, cost, amount, categories } = product;

  return (
    <div className="productPage">
      <div className="productPage__products">
        <div className="productPage__image-container">
          <img
            src={url}
            alt={name}
            width="600"
            height="600"
            className="productPage__image"
          />
        </div>
        <div className="productPage__wrapper">
          <p className="productPage__id">{`Арт. ${_id}`}</p>
          <p className="productPage__description">{description}</p>
          <p className="productPage__cost">
            <span className="productPage__cost-value">{cost}</span>₽/шт.
          </p>
          <p className="productPage__amount">
            Доступно для заказа:&nbsp;
            <span className="productPage__amount-value">{amount}шт.</span>
          </p>
          <h3 className="productPage__subtitle">Категории:</h3>
          <ul className="productPage__categories-list">
            {categories.map((category) => (
              <li key={category} className="productPage__categories-item">
                {useSelector(getCategoryById(category))?.name}
              </li>
            ))}
          </ul>
          <Button
            label="Добавить в корзину"
            onClick={() => dispatch(addProduct(product))}
          />
          {authStatus && authStatus.userId !== "undefined" && (
            <Button onClick={handleMoveToEditPage} label="Редактировать" />
          )}
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default ProductPage;
