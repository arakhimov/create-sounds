/* eslint-disable indent */
/* eslint-disable multiline-ternary */
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import api from "../../../API";
// import { useDescription } from "../../../hooks/useDescription";
import { useProducts } from "../../../hooks/useProducts";
import Button from "../../common/button/button";
import "./productPage.css";

const ProductPage = () => {
  const history = useHistory();
  const { productId } = useParams();
  const { getProductById } = useProducts();
  const product = getProductById(productId);

  const handleMoveToEditPage = () => {
    history.push(`/edit/${productId}`);
  };

  // const { getDescriptionById } = useDescription();
  // const { description } = getDescriptionById(productId);
  // console.log(description);
  const [description, setDescription] = useState();
  useEffect(async () => {
    await api.descriptions
      .getDescriptionById(productId)
      .then((data) => setDescription(data));
  }, []);

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
        {description && (
          <p className="productPage__description">{description.description}</p>
        )}
        <Button label="Добавить в корзину" />
        <Button onClick={handleMoveToEditPage} label="Редактировать" />
      </div>
    </div>
  );
};

export default ProductPage;
