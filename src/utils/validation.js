import { REG_EXP_EMAIL, REG_EXP_NAME } from "./config";
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
  return !name || REG_EXP_NAME.test(name) ? "" : nameErrorMessage.invalid;
};

export const validateEmail = (email) => {
  if (email?.length === 0) {
    return emailErrorMessage.length;
  }
  return !email || REG_EXP_EMAIL.test(email) ? "" : emailErrorMessage.invalid;
};
