/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";

const MultiSelectField = ({
  options,
  onChange,
  name,
  label,
  defaultValue,
  error
}) => {
  const handleChange = (value) => {
    onChange({ name, value: value.map((q) => q.value) });
  };

  return (
    <div className="mb-3">
      <label className="form-check-label mb-2" htmlFor="inlineRadio1">
        {label}
      </label>
      {options && (
        <Select
          defaultValue={
            defaultValue &&
            options.filter((category) => defaultValue.includes(category.value))
          }
          className={`form-control ${
            error ? "is-invalid" : "is-valid"
          } basic-multi-select`}
          classNamePrefix="select"
          options={options}
          name={name}
          onChange={handleChange}
          isMulti
        />
      )}
      {error && <p className="invalid-feedback">{error}</p>}
    </div>
  );
};

MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string
};

export default MultiSelectField;
