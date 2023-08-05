import { regExpEmail, regExpName } from "./config";
const emailErrorMessage = {
  invalid: "Неверный формат почты",
  length: "Поле email не долждно быть пустым",
};

const nameErrorMessage = {
  invalid: "Поле name содержит только латиницу, кириллицу, пробел или дефис.",
  length: "Поле name не долждно быть пустым",
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
