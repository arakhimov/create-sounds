import React from "react";
import { useSelector } from "react-redux";
import { PRODUCTS_PER_PAGE } from "../../../constants";
import { getCurrentPage, getFilteredProducts } from "../../../store/products";
import Pagination from "../../common/pagination/pagination";
import Product from "../../ui/product/product";
import SortingPanel from "../../ui/sorttingPanel/sortingPanel";
import "./productListPage.css";

const ProductListPage = () => {
  const products = useSelector(getFilteredProducts());
  const currentPageNumber = useSelector(getCurrentPage());

  const startIndex = (currentPageNumber - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentPageProducts = products.slice(startIndex, endIndex);

  return (
    <div className="products-catalog">
      <SortingPanel />
      <ul className="products-catalog__list">
        {products &&
          currentPageProducts.map((product) => (
            <Product key={product._id} {...product} />
          ))}
      </ul>
      <Pagination
        items={products.length}
        pageSize={PRODUCTS_PER_PAGE}
        currentPage={currentPageNumber}
      />
    </div>
  );
};

export default ProductListPage;
