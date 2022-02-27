/* eslint-disable multiline-ternary */
/* eslint-disable max-len */
import React, { useState } from "react";
import CreateProductForm from "../../ui/createProductForm/createProductForm";
import ProductsTable from "../../ui/productsTable/productsTable";
import "./productsEditList.css";

const ProductsEditList = () => {
  const [addProductMode, setAddProuctmode] = useState(false);

  const handleRedirect = () => {
    setAddProuctmode((prevState) => !prevState);
  };

  return addProductMode ? (
    <CreateProductForm redirect={handleRedirect} />
  ) : (
    <ProductsTable redirect={handleRedirect} />
  );
};

export default ProductsEditList;
