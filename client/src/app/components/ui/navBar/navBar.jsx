import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../../routes";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
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
          <NavLink to="/login" className="nav__link">
            Профиль
          </NavLink>
        </li>
        {routes.map((route, ind) => {
          if (route.display !== false) {
            return (
              <li key={ind} className="nav__list-item">
                <NavLink
                  activeClassName="nav__link--active"
                  className={"nav__link nav__link--" + route.path.slice(1)}
                  to={route.path}
                >
                  {route.name}
                </NavLink>
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
