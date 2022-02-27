/* eslint-disable indent */
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./app/App";
import AppLoader from "./app/components/hoc/appLoader";
import { createStore } from "./app/store/createStore";
import history from "./app/utils/history";
import "./index.css";

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <AppLoader>
          <App />
        </AppLoader>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
