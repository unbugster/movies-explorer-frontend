import { DEFAULT_API_HEADERS, API_BFMOVIES_URL } from "../utils/config";

export class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = { ...DEFAULT_API_HEADERS, ...headers };
  }

  _getToken = () => {
    return `Bearer ${localStorage.getItem("jwt")}`;
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error in response: ${res.status}`);
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: { ...this._headers, authorization: this._getToken() },
      method: "GET",
    }).then((res) => this._checkResponse(res));
  }

  editUserData(data) {
    return fetch(`${this._url}/users/me`, {
      headers: { ...this._headers, authorization: this._getToken() },
      method: "PATCH",
      body: JSON.stringify({ email: data.email, name: data.name }),
    }).then((res) => this._checkResponse(res));
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: { ...this._headers, authorization: this._getToken() },
      method: "GET",
    }).then((res) => this._checkResponse(res));
  }

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      body: JSON.stringify({
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        director: movie.director,
        country: movie.country,
        year: movie.year,
        duration: movie.duration,
        description: movie.description,
        trailerLink: movie.trailerLink,
        image: `${API_BFMOVIES_URL}${movie.image.url}`,
        thumbnail: `${API_BFMOVIES_URL}${movie.image.formats.thumbnail.url}`,
      }),
      headers: { ...this._headers, authorization: this._getToken() },
    }).then((res) => this._checkResponse(res));
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: { ...this._headers, authorization: this._getToken() },
    }).then((res) => this._checkResponse(res));
  }

  getAllData() {
    return Promise.all([this.getUserData(), this.getSavedMovies()]);
  }
}
