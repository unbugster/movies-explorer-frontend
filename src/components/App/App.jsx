import React, { useState } from "react";
import { Header } from "../Header";
import "./App.css";
import { Promo } from "../Promo";
import { AboutProject } from "../AboutProject";

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
    </div>
  );
};

export { App };
