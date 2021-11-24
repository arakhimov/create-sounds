/* eslint-disable operator-linebreak */
import React from "react";
import { useCategories } from "../../../hooks/useCategories";
import { useProducts } from "../../../hooks/useProducts";
import Button from "../../common/button/button";
import "./categoriesList.css";

const CategoriesList = () => {
  const { categories } = useCategories();
  const { setProductCategory, selectedCategory } = useProducts();

  const handleClick = (id) => {
    setProductCategory(id);
  };

  const handleResetCategory = () => {
    setProductCategory(null);
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories &&
          categories.map((category) => (
            <li
              className={
                "categories__item" +
                (selectedCategory === category._id
                  ? " categories__item--active"
                  : "")
              }
              key={category._id}
              onClick={() => handleClick(category._id)}
            >
              {category.name}
            </li>
          ))}
      </ul>
      <Button label="Показать все" onClick={handleResetCategory} />
    </div>
  );
};

export default CategoriesList;
