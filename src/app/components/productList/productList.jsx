import React, { useEffect, useState } from "react";
import api from "../../API/fake.api/item.api";
import Product from "../product/product";

const ProductList = () => {
  const [products, setProducts] = useState();

  useEffect(() => api.fetchAll().then((data) => setProducts(data)));

  return (
    <ul className="product__list">
      {products &&
        products.map((product) => <Product key={product._id} {...product} />)}
    </ul>
  );
};

export default ProductList;
