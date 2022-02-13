/* eslint-disable multiline-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import React from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useProducts } from "../../../hooks/useProducts";
import routes from "../../../routes";
import "./breadcrumbs.css";

const Breadcrumbs = () => {
  const history = useHistory();
  const { productId } = useParams();
  const currentRoutes = history.location.pathname
    .match(/\w+/g)
    .map(
      (rout, ind, routes) =>
        "/" +
        (ind === 0
          ? rout
          : routes.slice(0, ind).reduce((prev, item) => prev + "/" + item) +
            "/" +
            rout)
    );
  const { getProductById } = useProducts();
  const currentProduct = getProductById(productId);

  const getNameRoute = (route) => {
    if (/\/.*\/\d{8}\/isEdit/.test(route)) {
      return "Редактировать";
    }
    if (/login\/login/.test(route)) {
      return "signIn";
    }
    if (/login\/register/.test(route)) {
      return "signUp";
    }
    if (/\/[a-z]+$/.test(route)) {
      const currentRoute = routes.find((item) => item.path.includes(route));
      return currentRoute && currentRoute.name;
    }
    if (/\/\w*\/\d{8}$/.test(route)) {
      return currentProduct.name;
    }
    return route;
  };

  return currentRoutes.length <= 1 ? null : (
    <ul className="breadcrumbs">
      {currentRoutes.map(
        (route, ind) => (
          <li className="breadcrumbs__item" key={route}>
            {ind + 1 === currentRoutes.length ? (
              getNameRoute(route)
            ) : (
              <Link className="breadcrumbs__link" to={route}>
                {getNameRoute(route)}
              </Link>
            )}
          </li>
        )
        // )
      )}
    </ul>
  );
};

export default Breadcrumbs;
