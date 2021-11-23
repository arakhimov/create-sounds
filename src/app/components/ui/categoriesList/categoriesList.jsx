import React, { useEffect, useState } from "react";
import api from "../../../API/index";
import "./categoriesList.css";

const CategoriesList = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    api.categories.fetchAll().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ul className="categories">
      {categories &&
        Object.keys(categories).map((category) => (
          <li className="categories__item" key={categories[category]._id}>
            {categories[category].name}
          </li>
        ))}
    </ul>
  );
};

export default CategoriesList;
