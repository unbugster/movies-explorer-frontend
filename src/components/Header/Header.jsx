import classNames from "classnames";
import logo from "../../images/logo.svg";
import "./Header.css";
import { Burger } from "../Burger";
import { NavLogin } from "../NavLogin/NavLogin";
import { NavLinks } from "../NavLinks";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { isLoggedIn, isBurgerActive, setIsBurgerActive } = props;
  const cls = isLoggedIn ? "header_bg_white" : "";
  return (
    <header className={classNames("header", cls)}>
      <div className="header__container container">
        <Link className="header__route" to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        {isLoggedIn ? (
          <NavLinks
            isBurgerActive={isBurgerActive}
            setIsBurgerActive={setIsBurgerActive}
          />
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
