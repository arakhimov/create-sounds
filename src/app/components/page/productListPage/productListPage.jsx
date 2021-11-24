import React from "react";
import { PRODUCTS_PER_PAGE } from "../../../constants";
import { useProducts } from "../../../hooks/useProducts";
import Pagination from "../../common/pagination/pagination";
import Product from "../../ui/product/product";
import SortingPanel from "../../ui/sorttingPanel/sortingPanel";
import "./productListPage.css";

const ProductListPage = () => {
  const {
    currentPageProducts: products,
    filteredProducts,
    currentPage,
    handleChangeCurrentPage,
    changeSortType
  } = useProducts();

  return (
    <div className="products-catalog">
      <SortingPanel onChangeType={changeSortType} />
      <ul className="products-catalog__list">
        {products &&
          products.map((product) => <Product key={product._id} {...product} />)}
      </ul>
      <Pagination
        items={filteredProducts.length}
        pageSize={PRODUCTS_PER_PAGE}
        currentPage={currentPage}
        onChangePage={handleChangeCurrentPage}
      />
    </div>
  );
};

export default ProductListPage;
