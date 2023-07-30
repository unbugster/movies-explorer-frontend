import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Movies } from "../Movies";
import { NotFoundPage } from "../NotFoundPage";
import { SavedMovies } from "../SavedMovies";
import { Route, Routes, useLocation } from "react-router-dom";
import { Main } from "../Main";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const location = useLocation();
  const headerPaths = ["/", "/movies", "/saved-movies", "/profile"];
  const footerPaths = ["/", "/movies", "/saved-movies"];

  const isLoggedIn = location.pathname === "/" ? false : true;

  useEffect(() => {
    if (isBurgerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isBurgerActive]);

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
          <Route path="/movies" element={<Movies />} />
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
