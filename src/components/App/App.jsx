import { useEffect, useState } from "react";
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

const App = () => {
  const location = useLocation();
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const headerPaths = ["/", "/movies", "/saved-movies", "/profile"];
  const footerPaths = ["/", "/movies", "/saved-movies"];
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (isBurgerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isBurgerActive]);

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
            setIsError(true);
            console.log(`Что-то пошло не так: ${err}`);
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
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (values) => {
    auth
      .register(values.name, values.email, values.password)
      .then((res) => {
        handleLogin(values);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditProfile = (user) => {
    const apiDataMain = new MainApi({ url: "http://localhost:3100" });
    apiDataMain
      .editUserData(user)
      .then(() => {
        setCurrentUser({
          ...currentUser,
          name: user.name,
          email: user.email,
        });
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ${err}`);
      });
  };

  useEffect(() => {
    const apiDataMain = new MainApi({ url: "http://localhost:3100" });

    apiDataMain
      .getUserData()
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(`Что-то пошло не так... (${error})`);
      });
  }, []);

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
              <Register onRegister={handleRegister} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path="/signin"
            element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/movies"
            element={<Movies movies={movies} isError={isError} />}
          />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route
            path="/profile"
            element={
              <Profile
                currentUser={currentUser}
                onEditProfile={handleEditProfile}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {footerPaths.includes(location.pathname) ? <Footer /> : ""}
    </div>
  );
};

export { App };
