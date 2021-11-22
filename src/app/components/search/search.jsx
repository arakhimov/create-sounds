import React from "react";
import "./search.css";

const Search = () => {
  return (
    <form
      action=""
      className="search"
      method="GET"
      name="search"
      target="_blank"
    >
      <label htmlFor="search__field" className="search__label">
        <input
          type="search"
          placeholder="Поиск по сайту"
          className="search__field"
          id="search__field"
          aria-label="Введите текст запроса для поиска"
        />
      </label>
      <button className="search__submit">Найти</button>
    </form>
  );
};

export default Search;
