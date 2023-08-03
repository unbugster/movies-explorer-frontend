import { AboutMe } from "../AboutMe";
import { AboutProject } from "../AboutProject";
import { Portfolio } from "../Portfolio";
import { Promo } from "../Promo";
import { Techs } from "../Techs/Techs";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  );
};

export { Main };
