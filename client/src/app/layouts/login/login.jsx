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
                <h1>Войти</h1>
                <LoginForm />
                <p className="mt-3">
                  Already have account?&nbsp;
                  <a
                    onClick={() => handleToggleType()}
                    role="button"
                    className="login__submit"
                  >
                    Sign in
                  </a>
                </p>
              </>
            ) : (
              <>
                <h1>Зарегистрироваться</h1>
                <RegisterForm />
                <p className="mt-3">
                  Don&apos;t have account?&nbsp;
                  <a
                    className="login__submit"
                    onClick={() => handleToggleType(formType)}
                    role="button"
                  >
                    Sign out
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
