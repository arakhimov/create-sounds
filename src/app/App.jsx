import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import Cart from "./components/cart/cart";
import Catalog from "./components/catalog/catalog";
import Login from "./components/login/login";
import Logo from "./components/logo/logo";
import NavBar from "./components/navBar/navBar";
import Search from "./components/search/search";

function App() {
  return (
    <>
      <header className="d-flex align-items-center header">
        <div className="header__wrapper">
          <Logo />
          <Search />
        </div>
        <NavBar />
      </header>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Catalog} />
      </Switch>
    </>
  );
}

export default App;
