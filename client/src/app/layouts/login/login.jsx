/* eslint-disable max-len */
/* eslint-disable multiline-ternary */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/ui/breadcrumbs/breadcrumbs";
import LoginForm from "../../components/ui/loginForm/loginForm";
import RegisterForm from "../../components/ui/registerForm/registerForm";
import "./login.css";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  const handleToggleType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <>
      <Breadcrumbs />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            {formType === "login" ? (
              <>
                <h1>Вход</h1>
                <LoginForm />
                <p className="mt-3">
                  <a
                    onClick={() => handleToggleType()}
                    role="button"
                    className="login__sign"
                  >
                    Зарегистрироваться&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-return-right"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                    </svg>
                  </a>
                </p>
              </>
            ) : (
              <>
                <h1>Регистрация</h1>
                <RegisterForm />
                <p className="mt-3">
                  <a
                    className="login__sign"
                    onClick={() => handleToggleType(formType)}
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-return-left"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    &nbsp;У меня уже есть аккаунт
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
