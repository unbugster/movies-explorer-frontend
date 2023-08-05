import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Button } from "../Button";
import { validateEmail, validateName } from "../../utils/validation";
const Register = (props) => {
  const { onRegister, isLoggedIn } = props;
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/movies");
    }
  }, [isLoggedIn]);

  const nameError = validateName(values.name);
  const emailError = validateEmail(values.email);
  const btnDisabled = !isValid || nameError || emailError;

  return (
    <section className="register-page">
      <Link className="register-page__route" to="/">
        <img className="register-page__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className="register-page__title">Добро пожаловать!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onRegister(values);
        }}
        className="register-form"
      >
        <div className="register-form__input-field">
          <label className="register-form__label" htmlFor="user-name-input">
            Имя
          </label>
          <input
            className="register-form__input"
            id="user-name-input"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            type="text"
            placeholder="Введите имя"
            maxLength="40"
            required
          />
          <span
            className={`register-form__input-error ${
              isValid ? "" : "register-form__input-error_active"
            }`}
          >
            {nameError}
          </span>
        </div>

        <div className="register-form__input-field">
          <label className="register-form__label" htmlFor="user-email-input">
            E-mail
          </label>
          <input
            className="register-form__input"
            id="user-email-input"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            type="email"
            placeholder="Введите почту"
            required
          />
          <span
            className={`register-form__input-error ${
              isValid ? "" : "register-form__input-error_active"
            }`}
          >
            {emailError}
          </span>
        </div>

        <div className="register-form__input-field">
          <label className="register-form__label" htmlFor="user-password-input">
            Пароль
          </label>
          <input
            className="register-form__input register-form__input_type_pass"
            id="user-password-input"
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
            className={`register-form__input-error ${
              isValid ? "" : "register-form__input-error_active"
            }`}
          >
            {errors.password}
          </span>
          <span className="register-form__api-error"></span>
        </div>
        <Button
          type="submit"
          className="register-form__btn"
          disabled={btnDisabled}
        >
          Зарегистрироваться
        </Button>

        <div className="register-page__text">
          <span>Уже зарегистрированы? </span>
          <Link to="/signin" className="register-page__link">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

export { Register };
