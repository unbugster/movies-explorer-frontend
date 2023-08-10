import { DEFAULT_API_HEADERS, API_BFMOVIES_DATA_URL } from "./config";

class MoviesApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = { ...DEFAULT_API_HEADERS, ...headers };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error in response: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}`, { headers: this._headers }).then((res) =>
      this._checkResponse(res)
    );
  }
}

export const apiBeatfilmMoviesData = new MoviesApi({
  url: API_BFMOVIES_DATA_URL,
});
