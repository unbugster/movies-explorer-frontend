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

// test1
// import { auth } from "../../utils/Auth";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const headerPaths = ["/", "/movies", "/saved-movies", "/profile"];
  const footerPaths = ["/", "/movies", "/saved-movies"];
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // test1
  // useEffect(() => {
  //   auth
  //     .authorize("abcde@mail.ru", "12ff345ff678")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    if (isBurgerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isBurgerActive]);

  useEffect(() => {
    if (isLoggedIn) {
      if (localStorage.getItem("movies")) {
        setMovies(JSON.parse(localStorage.getItem("movies")));
      } else {
        apiBeatfilmMoviesData
          .getMovies()
          .then((movies) => {
            localStorage.setItem("movies", JSON.stringify(movies));
            setMovies(movies);
          })
          .catch((err) => {
            if (err.status === 401) {
              localStorage.removeItem("jwt");
              setIsLoading(false);
            }
            navigate("/signin");
            console.log(`Что-то пошло не так: ${err.status} , ${err.message}`);
          });
      }
    }
  }, [isLoggedIn]);

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
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {footerPaths.includes(location.pathname) ? <Footer /> : ""}
    </div>
  );
};

export { App };
