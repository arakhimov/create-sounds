import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchField, setSearchField } from "../../../store/products";
import "./searchField.css";

const SearchField = ({ name, placeholder }) => {
  const dispatch = useDispatch();
  const searchField = useSelector(getSearchField());

  const handleChange = ({ target }) => {
    dispatch(setSearchField(target.value));
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
