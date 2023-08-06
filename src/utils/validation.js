import { regExpEmail, regExpName } from "./config";
const emailErrorMessage = {
  invalid: "Неверный формат почты",
  length: "Поле email должно быть заполнено",
};

const nameErrorMessage = {
  invalid: "Поле name содержит только латиницу, кириллицу, пробел или дефис.",
  length: "Поле name должно быть заполнено",
};

export const validateName = (name) => {
  if (name?.length === 0) {
    return nameErrorMessage.length;
  }
  return !name || regExpName.test(name) ? "" : nameErrorMessage.invalid;
};

export const validateEmail = (email) => {
  if (email?.length === 0) {
    return emailErrorMessage.length;
  }
  return !email || regExpEmail.test(email) ? "" : emailErrorMessage.invalid;
};
