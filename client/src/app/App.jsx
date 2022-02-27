/* eslint-disable multiline-ternary */
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";
import Logo from "./components/ui/logo/logo";
import NavBar from "./components/ui/navBar/navBar";
import ProtectedRoute from "./components/ui/protectedRoute/protectedRoute";
import SearchField from "./components/ui/searchField/searchField";
import routes from "./routes";

const getRoutes = (routes) => {
  return routes.map(({ path, Component }, ind) => {
    // для страницы редактирования добавляем ProtectedRoute
    return /\/edit/.test(path) ? (
      <ProtectedRoute path={path} key={ind} component={Component} />
    ) : (
      <Route path={path} component={Component} key={ind} />
    );
    // return <Route path={path} component={Component} key={ind} />;
  });
};

function App() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Logo />
          <SearchField
            name="search"
            placeholder="Поиск по наименованию или артикулу"
          />
        </div>
        <NavBar />
      </header>
      <ToastContainer />
      <Switch>{getRoutes(routes)}</Switch>
    </>
  );
}

export default App;
