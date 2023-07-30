import classNames from "classnames";
import { Button } from "../Button";
import { UserMenu } from "../UserMenu";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  const { isBurgerActive, setIsBurgerActive } = props;

  const handleLinkClick = () => {
    setIsBurgerActive((v) => !v);
  };

  const cls = isBurgerActive ? "nav_opened" : "";

  const activeLinkClass = "nav__link nav__link_active";
  const inactiveLinkClass = "nav__link nav__link-item";

  return (
    <div className={classNames("nav", cls)}>
      <div className="nav__container">
        <div className={classNames("nav__links")}>
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive ? activeLinkClass : inactiveLinkClass
            }
          >
            <Button transparent hidden className={"button_header-menu"}>
              Главная
            </Button>
          </NavLink>
          <NavLink
            to="/movies"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive ? activeLinkClass : inactiveLinkClass
            }
          >
            <Button transparent className={"button_header-menu"}>
              Фильмы
            </Button>
          </NavLink>
          <NavLink
            to="/saved-movies"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive ? activeLinkClass : inactiveLinkClass
            }
          >
            <Button transparent className={"button_header-menu"}>
              Сохранённые фильмы
            </Button>
          </NavLink>
        </div>

        <UserMenu
          isBurgerActive={isBurgerActive}
          setIsBurgerActive={setIsBurgerActive}
        />
      </div>
    </div>
  );
};

export { NavLinks };
