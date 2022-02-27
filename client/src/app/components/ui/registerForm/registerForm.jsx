/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthError, signUp } from "../../../store/users";
import { validator } from "../../../utils/validator";
import CheckBoxField from "../../common/form/checkBoxField";
import RadioField from "../../common/form/radioField";
import TextField from "../../common/form/textField";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    sex: "male",
    license: false
  });
  const [errors, setErrors] = useState({});

  useEffect(() => validate(), [data]);

  const authError = useSelector(getAuthError());

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    email: {
      isRequired: { message: "Электронная почта обязательна для заполнения" },
      isEmail: { message: "Электронная почта введена некорректно" }
    },
    name: {
      isRequired: { message: "Имя обязательно для заполнения" },
      isMin: {
        message: "Имя должно состоять минимум из 3 символов",
        value: 3
      }
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
    },
    license: {
      isRequired: {
        message:
          "Для продолжения работы с сервисом необходимо подтвердить лицензионное соглашение"
      }
    }
  };

  function validate() {
    const validateErrors = validator(data, validatorConfig);
    setErrors(validateErrors);

    return Object.keys(errors).length === 0;
  }

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    dispatch(signUp(data));
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
        label="Имя"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <RadioField
        options={[
          { name: "Male", value: "male" },
          { name: "Female", value: "female" },
          { name: "other", value: "other" }
        ]}
        name="sex"
        label="Выберите ваш пол"
        onChange={handleChange}
        value={data.sex}
      />

      <CheckBoxField
        name="license"
        value={data.license}
        onChange={handleChange}
        error={errors.license}
      >
        <p className="mb-0">
          Подтвердить <a href="">лицензионное соглашение</a>
        </p>
      </CheckBoxField>
      {authError && <p className="text-danger">{authError}</p>}

      <button
        className="btn btn-primary w-25"
        type="submit"
        disabled={!isValid}
      >
        Отправить
      </button>
    </form>
  );
};

export default RegisterForm;
