/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { handleChangeCurrentPage } from "../../../store/products";
import "./pagination.css";

const Pagination = ({ items, pageSize, currentPage }) => {
  const dispatch = useDispatch();
  const pageAmount = Math.ceil(items / pageSize);
  const pages = new Array(pageAmount).fill(null).map((_, ind) => ind + 1);

  const handleSelectNextPage = () => {
    const nextPage = currentPage + 1;
    dispatch(
      handleChangeCurrentPage(nextPage <= pageAmount ? nextPage : currentPage)
    );
  };

  return (
    <>
      {pageAmount > 1 && (
        <div className="pagination">
          <ul className="pagination__list">
            {pages.map((page) => (
              <li className="pagination__item" key={page}>
                <a
                  className={
                    "pagination__link" +
                    (currentPage === page ? " pagination__link--active" : "")
                  }
                  onClick={() => dispatch(handleChangeCurrentPage(page))}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="pagination__next-page"
            onClick={handleSelectNextPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30 "
              fill="currentColor"
              viewBox="0 0 16 16"
              className="pagination__image"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

Pagination.propTypes = {
  items: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number
};

export default Pagination;
