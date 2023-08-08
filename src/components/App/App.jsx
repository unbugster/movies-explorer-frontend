import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Movies } from "../Movies";
import { NotFoundPage } from "../NotFoundPage";
import { SavedMovies } from "../SavedMovies";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Main } from "../Main";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { apiBeatfilmMoviesData } from "../../utils/MoviesApi";
import { auth } from "../../utils/Auth";

import { MainApi } from "../../utils/MainApi";
import useResize from "../../hooks/useResize";
import { ProtectedRoute } from "../ProtectedRoute";
import { UserContext } from "../UserContext";

const apiDataMain = new MainApi({
  url: process.env.REACT_APP_URL || "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

const App = () => {
  const location = useLocation();
  const headerPaths = ["/", "/movies", "/saved-movies", "/profile"];
  const footerPaths = ["/", "/movies", "/saved-movies"];
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [apiError, setApiError] = useState("");
  const [state, setState] = useState("default");
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isInited, setIsInited] = useState(false);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const size = useResize();
  const windowWidth = size.width;

  useEffect(() => {
    if (isBurgerActive && windowWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isBurgerActive, windowWidth]);

  useEffect(() => {
    if (isLoggedIn) {
      const storedMovies = localStorage.getItem("movies");

      if (storedMovies) {
        setMovies(JSON.parse(storedMovies));
      } else {
        apiBeatfilmMoviesData
          .getMovies()
          .then((movies) => {
            localStorage.setItem("movies", JSON.stringify(movies));
            setMovies(movies);
          })
          .catch((err) => {
            setApiError(err);
          });
      }
    }
  }, [isLoggedIn]);

  const handleLogin = (values) => {
    auth
      .authorize(values.email, values.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setApiError(err);
      });
  };

  const handleRegister = (values) => {
    auth
      .register(values.name, values.email, values.password)
      .then((res) => {
        handleLogin(values);
      })
      .catch((err) => {
        setApiError(err);
      });
  };

  const handleEditProfile = (user) => {
    apiDataMain
      .editUserData(user)
      .then(() => {
        setCurrentUser({
          ...currentUser,
          name: user.name,
          email: user.email,
        });
        setState("success");
      })
      .catch((err) => {
        setApiError(err);
        setState("error");
      });
  };

  useEffect(() => {
    apiDataMain
      .getUserData()
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(`Что-то пошло не так... (${error})`);
      })
      .finally(() => {
        setIsInited(true);
      });
  }, []);

  // Сохраненные фильмы
  useEffect(() => {
    isLoggedIn &&
      apiDataMain
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => {
          console.log(`Что-то пошло не так... (${err})`);
        });
  }, [isLoggedIn]);

  const handleSaveMovie = (movie, myBdMovie) => {
    const id = myBdMovie?._id;
    if (id) {
      handleDeleteMovie(id);
    } else {
      apiDataMain
        .saveMovie(movie)
        .then((res) => {
          setSavedMovies([...savedMovies, res]);
        })
        .catch((err) => {
          console.log(`Что-то пошло не так... (${err})`);
        });
    }
  };

  const handleDeleteMovie = (id) => {
    apiDataMain
      .deleteMovie(id)
      .then((res) => {
        const filteredSavedMovies = savedMovies.filter(
          (movie) => movie._id !== id
        );
        setSavedMovies(filteredSavedMovies);
      })
      .catch((err) => {
        console.log(`Что-то пошло не так... (${err})`);
      });
  };

  return (
    <div className="page">
      {headerPaths.includes(location.pathname) ? (
        <Header
          isBurgerActive={isBurgerActive}
          setIsBurgerActive={setIsBurgerActive}
          isLoggedIn={isLoggedIn}
        />
      ) : (
        ""
      )}

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signup"
            element={
              <Register
                onRegister={handleRegister}
                isLoggedIn={isLoggedIn}
                apiError={apiError}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                onLogin={handleLogin}
                isLoggedIn={isLoggedIn}
                apiError={apiError}
              />
            }
          />

          <Route
            path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} isInited={isInited}>
                <Movies
                  movies={movies}
                  savedMovies={savedMovies}
                  apiError={apiError}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  isSearched={isSearched}
                  setIsSearched={setIsSearched}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} isInited={isInited}>
                <SavedMovies
                  onDeleteMovie={handleDeleteMovie}
                  apiError={apiError}
                  savedMovies={savedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} isInited={isInited}>
                <Profile
                  state={state}
                  setState={setState}
                  onEditProfile={handleEditProfile}
                  apiError={apiError}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFoundPage isLoggedIn={isLoggedIn} />} />
        </Routes>
      </main>
      {footerPaths.includes(location.pathname) ? <Footer /> : ""}
    </div>
  );
};

export { App };
