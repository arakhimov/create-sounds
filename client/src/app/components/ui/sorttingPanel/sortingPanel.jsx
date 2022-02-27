/* eslint-disable max-len */
import React from "react";
import { useDispatch } from "react-redux";
import { setSortType } from "../../../store/products";
import "./sortingPanel.css";

const SortingPanel = () => {
  const dispatch = useDispatch();

  const handleChangeSortType = ({ currentTarget }) => {
    dispatch(setSortType(currentTarget.dataset.type));
  };

  return (
    <div className="sorting-panel">
      <h3 className="sorting-panel__title">Сортировка:</h3>
      <ul className="sorting-panel__method-list">
        <li className="sorting-panel__method-item">По цене</li>
      </ul>
      <ul className="sorting-panel__type-list">
        <li className="sorting-panel__type-item">
          <button
            type="button"
            className="sorting-panel__button"
            title="По возрастанию"
            aria-label="По возрастанию"
            data-type="asc"
            onClick={handleChangeSortType}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="sorting-panel__image"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </button>
        </li>
        <li className="sorting-panel__type-item">
          <button
            type="button"
            className="sorting-panel__button"
            title="По убыванию"
            aria-label="По убыванию"
            data-type="desc"
            onClick={handleChangeSortType}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="sorting-panel__image"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SortingPanel;
