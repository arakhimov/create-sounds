import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import localStorageService from "../../services/localStorage.service";
import {
  getCategoriesLoadingStatus,
  loadCategorisList
} from "../../store/categories";
import {
  getProductsLoadingStatus,
  loadProductsList
} from "../../store/products";
import { getAuthStatus, loadCurrentUserData } from "../../store/users";
import Preloader from "../common/preloader/preloader";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const productsloadingStatus = useSelector(getProductsLoadingStatus());
  const categoriesLoadingStatus = useSelector(getCategoriesLoadingStatus());
  const authStatus = useSelector(getAuthStatus());

  useEffect(() => {
    dispatch(loadCategorisList());
    dispatch(loadProductsList());
    // инициализация корзины в localStorage
    const productsInCart = JSON.parse(localStorageService.getCartproducts());
    if (!productsInCart) {
      localStorageService.setCartproducts(JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (authStatus && authStatus.userId !== "undefined") {
      dispatch(loadCurrentUserData());
      // dispatch(loadCartList(authStatus.userId));
    }
  }, []);

  if (productsloadingStatus || categoriesLoadingStatus) {
    return <Preloader />;
  }
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AppLoader;
