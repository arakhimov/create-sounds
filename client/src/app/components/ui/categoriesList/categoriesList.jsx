/* eslint-disable operator-linebreak */
import React from "react";
import { useCategories } from "../../../hooks/useCategories";
import { useProducts } from "../../../hooks/useProducts";
import Button from "../../common/button/button";
import "./categoriesList.css";

const CategoriesList = () => {
  const { categories } = useCategories();
  const { setProductCategory, selectedCategory } = useProducts();

  const handleClick = (event) => {
    event.preventDefault();
    setProductCategory(event.currentTarget.dataset.category);
  };

  const handleResetCategory = () => {
    setProductCategory(null);
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories &&
          categories.map((category) => (
            <li className="categories__item" key={category._id}>
              <a
                href=""
                data-category={category._id}
                onClick={handleClick}
                className={
                  "categories__link" +
                  (selectedCategory === category._id
                    ? " categories__item--active"
                    : "")
                }
              >
                {category.name}
              </a>
            </li>
          ))}
      </ul>
      <Button label="Показать все" onClick={handleResetCategory} />
    </div>
  );
};

export default CategoriesList;
