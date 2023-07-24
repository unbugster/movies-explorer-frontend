import React, { useState } from "react";
import { Header } from "../Header";
import "./App.css";

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
    </div>
  );
};

export { App };
