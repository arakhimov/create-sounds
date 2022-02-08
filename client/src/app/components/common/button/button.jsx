import PropTypes from "prop-types";
import React from "react";
import "./button.css";

const Button = ({ type, label, onClick }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {label}
    </button>
  );
};

Button.defaultProps = { type: "button" };

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
