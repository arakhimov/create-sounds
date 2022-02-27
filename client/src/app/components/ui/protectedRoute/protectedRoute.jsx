import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsloggedInStaus } from "../../../store/users";

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
  const isLoggedIn = useSelector(getIsloggedInStaus());

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        return Component ? <Component {...props} /> : children;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  component: PropTypes.func,
  location: PropTypes.object
};

export default ProtectedRoute;
