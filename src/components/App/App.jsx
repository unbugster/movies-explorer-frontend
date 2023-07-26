import React, { useState } from "react";
import { Header } from "../Header";
import "./App.css";
import { Promo } from "../Promo";
import { AboutProject } from "../AboutProject";
import { Techs } from "../Techs/Techs";
import { AboutMe } from "../AboutMe";
import { Portfolio } from "../Portfolio";
import { Footer } from "../Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <div className="page">
      <Header
        isBurgerActive={isBurgerActive}
        setIsBurgerActive={setIsBurgerActive}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
};

export { App };
