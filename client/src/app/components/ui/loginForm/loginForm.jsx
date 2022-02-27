/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthError, login } from "../../../store/users";
import history from "../../../utils/history";
import { validator } from "../../../utils/validator";
import CheckBoxField from "../../common/form/checkBoxField";
import TextField from "../../common/form/textField";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
  const [errors, setErrors] = useState({});

  const authError = useSelector(getAuthError());

  useEffect(() => validate(), [data]);

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    email: {
      isRequired: { message: "Электронная почта обязательна для заполнения" },
      isEmail: { message: "Электронная почта введена некорректно" }
    },
    password: {
      isRequired: { message: "Пароль обязателен для заполнения" },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву"
      },
      isContainDigit: { message: "Пароль должен содержать хотя бы одно число" },
      isMin: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8
      }
    }
  };

  const validate = () => {
    const validateErrors = validator(data, validatorConfig);
    setErrors(validateErrors);

    return Object.keys(validateErrors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    const redirect = history.location.state
      ? history.location.state.from.pathname
      : "/products";
    dispatch(login({ payload: data, redirect }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField name="stayOn" value={data.stayOn} onChange={handleChange}>
        <p className="mb-0">Оставаться в системе</p>
      </CheckBoxField>
      {authError && <p className="text-danger">{authError}</p>}

      <button className="btn btn-primary" type="submit" disabled={!isValid}>
        Отправить
      </button>
    </form>
  );
};

export default LoginForm;
