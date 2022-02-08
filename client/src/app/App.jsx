import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";
import Logo from "./components/ui/logo/logo";
import NavBar from "./components/ui/navBar/navBar";
import SearchField from "./components/ui/searchField/searchField";
import { CategoriesProvider } from "./hooks/useCategories";
import { DescriptionProvider } from "./hooks/useDescription";
import { ProductsProvider } from "./hooks/useProducts";
import routes from "./routes";

const getRoutes = (routes) => {
  return routes.map(({ path, Component }, ind) => {
    return <Route path={path} component={Component} key={ind} />;
  });
};

function App() {
  return (
    <ProductsProvider>
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
      <Switch>
        <CategoriesProvider>
          <DescriptionProvider>
            {getRoutes(routes)}
            <Redirect to="/products" />
          </DescriptionProvider>
        </CategoriesProvider>
      </Switch>
    </ProductsProvider>
  );
}

export default App;
