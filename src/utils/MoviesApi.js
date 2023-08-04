import { apiBeatfilmMoviesDataUrl } from "../config";

const defaultHeaders = {
  "Content-Type": "application/json",
};

class MoviesApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = { ...defaultHeaders, ...headers };
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
  url: apiBeatfilmMoviesDataUrl,
});
