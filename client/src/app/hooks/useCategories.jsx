import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../API/index";
import Preloader from "../components/common/preloader/preloader";

const CategoriesContext = React.createContext();

export const useCategories = () => {
  return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getCategoriesList();
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  async function getCategoriesList() {
    try {
      await api.categories.fetchAll().then((data) => {
        if (data && typeof data === "object") {
          const categoriesArray = Object.keys(data).map((item) => data[item]);
          setCategories(categoriesArray);
        } else {
          setCategories(data);
        }
      });
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

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {!isLoading ? children : <Preloader />}
    </CategoriesContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
