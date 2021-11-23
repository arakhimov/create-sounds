import React from "react";
import { Link } from "react-router-dom";
import routes from "../../../routes";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="catalog" className="nav__link">
            products
          </Link>
        </li>
        {routes.map((route, ind) => {
          if (route.display !== false) {
            return (
              <li key={ind} className="nav__list-item">
                <Link
                  className={"nav__link nav__link--" + route.name}
                  to={route.path}
                >
                  {route.name}
                </Link>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
