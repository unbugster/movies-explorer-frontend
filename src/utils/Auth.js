const defaultHeaders = {
  "Content-Type": "application/json",
};

export class Auth {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = { ...defaultHeaders, ...headers };
  }

  _checkResponse(res) {
    console.log("res", res);
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error in response: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this.url}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._checkResponse(res));
  }

  authorize(email, password) {
    return fetch(`${this.url}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkResponse(res));
  }

  checkToken(token) {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }
}

export const auth = new Auth({
  url: "http://localhost:3100",
});
