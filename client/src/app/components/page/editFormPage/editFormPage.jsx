/* eslint-disable max-len */
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategories } from "../../../store/categories";
import { updateProduct } from "../../../store/products";
import { validator } from "../../../utils/validator";
import validatorConfig from "../../../utils/validatorConfigProducts";
import MultiSelectField from "../../common/form/multiSelectField";
import TextAreaField from "../../common/form/textAreaField";
import TextField from "../../common/form/textField";

const EditFormPage = ({
  name,
  description,
  cost,
  amount,
  url,
  categories,
  redirect
}) => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const categoriesList = useSelector(getCategories()).map((category) => ({
    value: category.categoryId,
    label: category.name
  }));

  const [data, setData] = useState({
    name,
    description,
    cost,
    amount,
    url,
    categories
  });
  const [errors, setErrors] = useState({});

  useEffect(() => validate(), [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    dispatch(updateProduct({ ...data, _id: productId }));
  };

  return (
    <div className="editForm mt-4">
      <div className="col-md-6 offset-md-3 shadow p-4">
        <h2>Редактировать</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Наименование"
            name="name"
            value={data.name}
            onChange={handleChange}
            error={errors.name}
          />
          <TextAreaField
            label="Описание"
            name="description"
            value={data.description}
            onChange={handleChange}
            error={errors.description}
            rows="5"
          />
          <TextField
            label="Стоимость"
            name="cost"
            value={String(data.cost)}
            onChange={handleChange}
            error={errors.cost}
          />
          <TextField
            label="Количество"
            name="amount"
            value={String(data.amount)}
            onChange={handleChange}
            error={errors.amount}
          />
          <TextField
            label="Фотография"
            name="url"
            value={data.url}
            onChange={handleChange}
            error={errors.url}
          />
          <MultiSelectField
            options={categoriesList}
            onChange={handleChange}
            name="categories"
            label="Выберите категории"
            error={errors.categories}
            defaultValue={data.categories}
          />

          {/* {authError && <p className="text-danger">{authError}</p>} */}

          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-primary m-0"
              type="submit"
              disabled={!isValid}
            >
              Отправить
            </button>
            <button
              className="btn btn-danger m-0"
              type="button"
              onClick={redirect}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-left me-3"
                viewBox="0 0 16 16"
              >
                <path d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
              </svg>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditFormPage.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  cost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  url: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  redirect: PropTypes.func
};

export default EditFormPage;
