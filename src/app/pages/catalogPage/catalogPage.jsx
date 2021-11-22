import React from "react";
import CategoriesList from "../../components/categoriesList.jsx/categoriesList";
import ProductList from "../../components/productList/productList";
import "./catalog.css";

const CatalogPage = () => {
  return (
    <div className="catalog">
      <h2>Каталог</h2>
      <div className="catalog__wrapper">
        <CategoriesList />
        <ProductList />
      </div>
    </div>
  );
};

export default CatalogPage;
