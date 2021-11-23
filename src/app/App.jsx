import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./app.css";
import Logo from "./components/ui/logo/logo";
import NavBar from "./components/ui/navBar/navBar";
import Search from "./components/ui/search/search";
import routes from "./routes";

const getRoutes = (routes) => {
  return routes.map((route, ind) => {
    return <Route path={route.path} component={route.component} key={ind} />;
  });
};

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
        {getRoutes(routes)}
        <Redirect to="/products" />
      </Switch>
    </>
  );
}

export default App;
