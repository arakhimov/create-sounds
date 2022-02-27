/* eslint-disable operator-linebreak */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/categories";
import {
  getCurrentCategory,
  setProductCategory
} from "../../../store/products";
import Button from "../../common/button/button";
import "./categoriesList.css";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories());
  const selectedCategory = useSelector(getCurrentCategory());

  const handleChangeCategory = (event) => {
    event.preventDefault();
    dispatch(setProductCategory(event.currentTarget.dataset.category));
  };

  const handleResetCategory = () => {
    dispatch(setProductCategory(null));
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories &&
          categories.map((category) => (
            <li className="categories__item" key={category._id}>
              <a
                href=""
                data-category={category.categoryId}
                onClick={handleChangeCategory}
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
