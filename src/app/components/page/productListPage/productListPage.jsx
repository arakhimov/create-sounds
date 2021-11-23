import React, { useEffect, useState } from "react";
import api from "../../../API/index";
import Product from "../productPage/productPage";

const ProductListPage = () => {
  const [products, setProducts] = useState();

  useEffect(() => api.products.fetchAll().then((data) => setProducts(data)));

  return (
    <ul className="product__list">
      {products &&
        products.map((product) => <Product key={product._id} {...product} />)}
    </ul>
  );
};

export default ProductListPage;
