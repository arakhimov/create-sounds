import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link className="nav__link" to="/">
            Каталог
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link nav__link--into" to="/login">
            Войти
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link nav__link--cart" to="/cart">
            Корзина
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
