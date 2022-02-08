import PropTypes from "prop-types";
import React from "react";
import { useProducts } from "../../../hooks/useProducts";
import "./searchField.css";

const SearchField = ({ name, value, placeholder, onChange }) => {
  const { searchField, changeSearchField } = useProducts();
  const handleChange = ({ target }) => {
    changeSearchField(target.value);
  };

  return (
    <form className="search" name="search">
      <label htmlFor="search__field" className="search__label">
        <input
          name={name}
          placeholder={placeholder}
          value={searchField}
          type="search"
          className="search__field"
          id="search__field"
          aria-label="Введите текст запроса для поиска"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

SearchField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchField;
