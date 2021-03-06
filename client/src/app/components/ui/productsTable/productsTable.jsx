/* eslint-disable max-len */
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCategoryById } from "../../../store/categories";
import { getProducts, removeProduct } from "../../../store/products";
import "./productsTable.css";

const ProductsTable = ({ redirect }) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts());
  const history = useHistory();

  const redirectToEditPage = (productId) => {
    history.push(`${history.location.pathname}/${productId}`);
  };

  const handleDelete = (productId) => {
    const confirmDelete = confirm("Удалить данный инструмент?");
    if (confirmDelete) {
      dispatch(removeProduct(productId));
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Таблица всех товаров</h1>
        <button className="btn btn-primary" type="button" onClick={redirect}>
          Добавить новый инструмент
        </button>
      </div>
      <table className="table productsTable">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Наименование</th>
            <th scope="col">Категории</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, ind) => {
              const { name, categories, cost, amount, _id } = product;
              return (
                <tr className="productsTable__column" key={_id}>
                  <td>{ind + 1}</td>
                  <td>{name}</td>
                  <td>
                    <div className="d-flex">
                      {categories.map((category) => (
                        <p className="m-0 me-2" key={category}>
                          {useSelector(getCategoryById(category)).name}
                        </p>
                      ))}
                    </div>
                  </td>
                  <td>{cost}</td>
                  <td>{amount}</td>
                  <td>
                    <button
                      type="button"
                      className="btn p-0 me-4 productsTable__button"
                      title="Удалить"
                      onClick={() => handleDelete(product._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="productsTable__icon"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                    <button
                      className="btn p-0 productsTable__button"
                      type="button"
                      title="Редактировать"
                      onClick={() => redirectToEditPage(product._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="productsTable__icon"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

ProductsTable.propTypes = {
  redirect: PropTypes.func
};

export default ProductsTable;
