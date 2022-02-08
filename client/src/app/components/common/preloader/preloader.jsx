import PropTypes from "prop-types";
import React from "react";
import "./preloader.css";

const Preloader = ({ color }) => {
  return (
    <div className="preloader">
      <div className="prelader__container">
        <div className="preloader__ball-holder">
          <div className="preloader__ball"></div>
        </div>
      </div>
    </div>
  );
};

Preloader.propTypes = {
  color: PropTypes.string
};

Preloader.defaultProps = { color: "#000000" };

export default Preloader;
