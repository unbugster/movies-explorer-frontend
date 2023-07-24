import classNames from "classnames";
import logo from "../../images/logo.svg";
import "./Header.css";
import { Burger } from "../Burger";
import { NavLogin } from "../NavLogin/NavLogin";
import { NavLinks } from "../NavLinks";

const Header = (props) => {
  const { isLoggedIn, isBurgerActive, setIsBurgerActive } = props;
  const cls = isLoggedIn ? "header_bg_white" : "";

  return (
    <header className={classNames("header", cls)}>
      <div className="header__container container">
        <img className="header__logo" src={logo} alt="Логотип" />
        {isLoggedIn ? (
          <NavLinks isBurgerActive={isBurgerActive} />
        ) : (
          <NavLogin />
        )}
        {isLoggedIn ? (
          <Burger
            isBurgerActive={isBurgerActive}
            setIsBurgerActive={setIsBurgerActive}
          />
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export { Header };
