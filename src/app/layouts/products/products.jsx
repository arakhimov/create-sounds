import React from "react";
import ProductList from "../../components/page/productListPage/productListPage";
import CategoriesList from "../../components/ui/categoriesList/categoriesList";
import "./products.css";

const Products = () => {
  return (
    <div className="products">
      <h2>Каталог</h2>
      <div className="products__wrapper">
        <CategoriesList />
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
