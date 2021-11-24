/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import { orderBy } from "lodash";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../API/index";
import { PRODUCTS_PER_PAGE } from "../constants";

const ProductsContext = React.createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [foundProducts, setFoundProducts] = useState();
  const [searchField, setSearchField] = useState("");
  const [currentPage, setCurentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ iterator: "cost", order: null });

  useEffect(() => {
    getProductsList();
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  async function getProductsList() {
    try {
      await api.products.fetchAll().then((data) => setProducts(data));
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }

  const setProductCategory = (categoryId) => {
    setSelectedCategory(() => categoryId);
    setSearchField("");
    setCurentPage(1);
    setSortBy({ iterator: "cost", order: null });
  };

  const changeSearchField = (value) => {
    setSearchField(() => value);
    setFoundProducts(() =>
      products.filter((product) => {
        return (
          product.name.toLowerCase().includes(value.toLowerCase()) ||
          product._id.toLowerCase().includes(value.toLowerCase())
        );
      })
    );
    setSelectedCategory(null);
    setSortBy({ iterator: "cost", order: null });
  };

  const handleChangeCurrentPage = (page) => {
    setCurentPage(page);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) =>
        product.categories.some((category) => category._id === selectedCategory)
      )
    : foundProducts || products;

  const changeSortType = (type) => {
    setSortBy((prevState) => ({ ...prevState, order: type }));
  };

  const sortedProducts = sortBy.order
    ? orderBy(filteredProducts, [sortBy.iterator], [sortBy.order])
    : filteredProducts;

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentPageProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <ProductsContext.Provider
      value={{
        currentPageProducts,
        filteredProducts,
        setProductCategory,
        selectedCategory,
        searchField,
        changeSearchField,
        currentPage,
        handleChangeCurrentPage,
        changeSortType
      }}
    >
      {!isLoading ? children : <p>loading...</p>}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
