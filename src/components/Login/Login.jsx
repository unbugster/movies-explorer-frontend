import "./Login.css";
import logo from "../../images/logo.svg";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { validateEmail } from "../../utils/validation";
import { Button } from "../Button";

const Login = (props) => {
  const { onLogin, isLoggedIn, apiError } = props;
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/movies");
    }
  }, [isLoggedIn]);

  const emailError = validateEmail(values.email);
  const btnDisabled = !isValid || emailError;

  return (
    <section className="login-page">
      <Link className="login-page__route" to="/">
        <img className="login-page__logo" src={logo} alt="Логотип" />
      </Link>

      <h1 className="login-page__title">Рады видеть!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(values);
        }}
        className="login-form"
      >
        <div className="login-form__input-field">
          <label className="login-form__label" htmlFor="user-email-input">
            E-mail
          </label>
          <input
            id="user-email-input"
            className="login-form__input"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            type="email"
            placeholder="Введите почту"
            required
          />
          <span
            className={`login-form__input-error ${
              isValid ? "" : "login-form__input-error_active"
            }`}
          >
            {emailError}
          </span>
        </div>

        <div className="login-form__input-field">
          <label className="login-form__label" htmlFor="user-password-input">
            Пароль
          </label>
          <input
            id="user-password-input"
            className="login-form__input"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            type="password"
            placeholder="Введите пароль"
            minLength="6"
            maxLength="200"
            required
          />
          <span
            className={`login-form__input-error ${
              isValid ? "" : "login-form__input-error_active"
            }`}
          >
            {errors.password}
          </span>
        </div>

        {apiError && (
          <span className="login-form__api-error">
            При авторизации произошла ошибка
          </span>
        )}

        <Button
          type="submit"
          className="login-form__btn"
          disabled={btnDisabled}
        >
          Войти
        </Button>

        <div className="login-page__text">
          <span>Ещё не зарегистрированы? </span>
          <Link to="/signup" className="login-page__link">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
};

export { Login };
