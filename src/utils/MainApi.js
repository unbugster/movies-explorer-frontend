import { apiBeatfilmMoviesUrl } from "../utils/config";

const defaultHeaders = {
  "Content-Type": "application/json",
  authorization: `Bearer ${localStorage.getItem("jwt")}`,
};

export class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = { ...defaultHeaders, ...headers };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error in response: ${res.status}`);
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: "GET",
    }).then((res) => this._checkResponse(res));
  }

  editUserData(data) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data),
    }).then((res) => this._checkResponse(res));
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
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
        image: `${apiBeatfilmMoviesUrl}${movie.image.url}`,
        thumbnail: `${apiBeatfilmMoviesUrl}${movie.image.formats.thumbnail.url}`,
      }),
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  getAllData() {
    return Promise.all([this.getUserData(), this.getSavedMovies()]);
  }
}
