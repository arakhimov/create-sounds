/* eslint-disable multiline-ternary */
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import ProductList from "../../components/page/productListPage/productListPage";
import ProductPage from "../../components/page/productPage/productPage";
import Breadcrumbs from "../../components/ui/breadcrumbs/breadcrumbs";
import CategoriesList from "../../components/ui/categoriesList/categoriesList";
import { setCurrentProduct } from "../../store/products";
import "./products.css";

const Products = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  // устанавливаем id текущего проекта
  if (productId) {
    dispatch(setCurrentProduct(productId));
  }

  return (
    <>
      <Breadcrumbs />
      {productId ? (
        <ProductPage />
      ) : (
        <div className="products">
          <h2>Каталог</h2>
          <div className="products__wrapper">
            <CategoriesList />
            <ProductList />
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
