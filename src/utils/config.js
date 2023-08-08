export const API_BFMOVIES_URL = "https://api.nomoreparties.co";
export const API_BFMOVIES_DATA_URL =
  "https://api.nomoreparties.co/beatfilm-movies";
export const REG_EXP_NAME = /^[a-zA-Zа-яА-Я\sё-]+$/i;
export const REG_EXP_EMAIL =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/i;

export const HEADER_PATHS = ["/", "/movies", "/saved-movies", "/profile"];
export const FOOTER_PATHS = ["/", "/movies", "/saved-movies"];
export const DEFAULT_API_HEADERS = {
  "Content-Type": "application/json",
};
