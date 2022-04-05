/* eslint-disable multiline-ternary */
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCartAmount } from "../../../store/cart";
import { getCurrenUserData } from "../../../store/users";
import NavProfile from "../navProfile/navProfile";
import "./navBar.css";

const NavBar = () => {
  const currentUser = useSelector(getCurrenUserData());
  const productsInCart = useSelector(getCartAmount());

  return (
    <nav className="nav">
      <ul className="nav__list d-flex align-items-center">
        <li className="nav__list-item">
          <NavLink to="/products" className="nav__link">
            Товары
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/edit" className="nav__link">
            Редактировать
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/cart" className="nav__link nav__link--cart">
            Корзина
            {productsInCart !== 0 && (
              <span className="nav__amount">{productsInCart}</span>
            )}
          </NavLink>
        </li>
        <li className="nav__list-item">
          {currentUser ? (
            <NavProfile />
          ) : (
            <NavLink to="/login" className="nav__link">
              Профиль
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
