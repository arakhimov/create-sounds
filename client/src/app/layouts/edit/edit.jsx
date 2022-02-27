/* eslint-disable multiline-ternary */
/* eslint-disable max-len */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import EditFormPage from "../../components/page/editFormPage/editFormPage";
import ProductsEditList from "../../components/page/productsEditList/productsEditList";
import Breadcrumbs from "../../components/ui/breadcrumbs/breadcrumbs";
import { setCurrentProduct, getProductById } from "../../store/products";

const Edit = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const product = useSelector(getProductById(productId));

  // устанавливаем id текущего продукта
  if (productId) {
    dispatch(setCurrentProduct(productId));
  }

  const handleRedirect = () => {
    history.push("/edit");
  };

  return (
    <div className="edit">
      <Breadcrumbs />
      {productId ? (
        <EditFormPage redirect={handleRedirect} {...product} />
      ) : (
        <ProductsEditList />
      )}
    </div>
  );
};

export default Edit;
