import React from "react";
import "./categoriesList.css";

const CategoriesList = () => {
  return (
    <ul className="categories">
      <li className="categories__item">Щипковые струнные</li>
      <li className="categories__item">Смычковые струнные</li>
      <li className="categories__item">Медные духовые</li>
      <li className="categories__item">Деревянные духовые</li>
      <li className="categories__item">Язычковые</li>
      <li className="categories__item">Ударные</li>
      <li className="categories__item">духовые клавишные</li>
      <li className="categories__item">Струнные клавишные</li>
      <li className="categories__item">Механические</li>
      <li className="categories__item">Электромузыкальные</li>
    </ul>
  );
};

export default CategoriesList;
