import "./Profile.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "../Button";
import { validateEmail, validateName } from "../../utils/validation";

const Profile = (props) => {
  const { currentUser, onEditProfile, state, setState } = props;
  const { values, handleChange, isValid, setValues, setIsValid } =
    useFormAndValidation();
  const inputNameRef = useRef();
  const inputEmailRef = useRef();

  const handleInputChange = (evt) => {
    handleChange(evt);
    setState("edited");
  };

  const handleEditClick = (evt) => {
    evt.preventDefault();
    setState("edited");
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    onEditProfile(values);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsValid(true);
    }
  }, [currentUser, setIsValid, setValues]);

  const handleLogoutClick = () => {
    navigate("/");
  };
  const nameError = validateName(values.name);
  const emailError = validateEmail(values.email);
  const btnDisabled =
    !isValid ||
    nameError ||
    emailError ||
    state === "error" ||
    (inputEmailRef.current.value === currentUser.email &&
      inputNameRef.current.value === currentUser.name);

  const inputDisabled = state === "default" || state === "success";
  return (
    <section className="profile">
      <h1 className="profile__welcome">Привет, {currentUser.name}!</h1>
      <form onSubmit={onSubmit} className="profile-form">
        <div className="profile-form__input-field">
          <label className="profile-form__label" htmlFor="user-name-input">
            Имя
          </label>
          <input
            className="profile-form__input"
            id="user-name-input"
            name="name"
            value={values.name || ""}
            onChange={handleInputChange}
            type="text"
            placeholder="Введите имя"
            maxLength="40"
            required
            ref={inputNameRef}
            disabled={inputDisabled}
          />
          <span
            className={`profile-form__input-error ${
              isValid ? "" : "profile-form__input-error_active"
            }`}
          >
            {nameError}
          </span>
        </div>

        <div className="profile-form__input-field">
          <label className="profile-form__label" htmlFor="user-email-input">
            E-mail
          </label>
          <input
            className="profile-form__input"
            id="user-email-input"
            name="email"
            value={values.email || ""}
            onChange={handleInputChange}
            type="email"
            placeholder="Введите почту"
            ref={inputEmailRef}
            disabled={inputDisabled}
            required
          />
          <span
            className={`profile-form__input-error ${
              isValid ? "" : "profile-form__input-error_active"
            }`}
          >
            {emailError}
          </span>
        </div>

        {state === "success" && (
          <span className="profile-form__success-message">
            Данные успешно обновлены!
          </span>
        )}

        {state === "error" && (
          <span className="profile-form__error-message">
            При обновлении профиля произошла ошибка.
          </span>
        )}

        {(state === "edited" || state === "error") && (
          <Button
            type="submit"
            className="profile-form__button profile-form__button-save"
            disabled={btnDisabled}
          >
            Сохранить
          </Button>
        )}

        {(state === "default" || state === "success") && (
          <Button
            type="button"
            className="profile-form__button profile-form__button-edit"
            onClick={handleEditClick}
          >
            Редактировать
          </Button>
        )}

        <button
          type="button"
          className="profile-form__button profile-form__button-signout"
          onClick={handleLogoutClick}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
};

export { Profile };
