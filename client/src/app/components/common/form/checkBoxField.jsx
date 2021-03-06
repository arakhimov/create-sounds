import PropTypes, { node } from "prop-types";
import React from "react";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };

  return (
    <div className="form-check mb-3 p-0">
      <div className="input-group d-flex align-items-center">
        <input
          className={`form-check-input m-0 me-2 ${error && "is-invalid"}`}
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked={value}
          name={name}
          onChange={handleChange}
        />

        <label className="form-check-label" htmlFor="flexCheckChecked">
          {children}
        </label>
      </div>
      {error && (
        <div
          id="invalidCheck3Feedback"
          className="invalid-feedback"
          style={{ marginLeft: "-24px" }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(node), node]),
  error: PropTypes.string
};

export default CheckBoxField;
