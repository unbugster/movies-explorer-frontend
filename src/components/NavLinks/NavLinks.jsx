import classNames from "classnames";
import { Button } from "../Button";
import { UserMenu } from "../UserMenu";
import "./NavLinks.css";

const NavLinks = (props) => {
  const { isBurgerActive, setIsBurgerActive } = props;

  const handleLinkClick = () => {
    setIsBurgerActive((v) => !v);
  };
  const cls = isBurgerActive ? "nav_opened" : "";
  const activeCls = "nav__link_active";
  const btnCls = `button_header-menu nav__link`;

  return (
    <nav className={classNames("nav", cls)}>
      <div className="nav__container">
        <ul className={classNames("nav__links")}>
          <li>
            <Button
              to="/"
              onClick={handleLinkClick}
              transparent
              hidden
              className={btnCls}
              activeCls={activeCls}
            >
              Главная
            </Button>
          </li>
          <li>
            <Button
              to="/movies"
              onClick={handleLinkClick}
              transparent
              className={btnCls}
              activeCls={activeCls}
            >
              Фильмы
            </Button>
          </li>
          <li>
            <Button
              to="/saved-movies"
              onClick={handleLinkClick}
              transparent
              className={btnCls}
              activeCls={activeCls}
            >
              Сохранённые фильмы
            </Button>
          </li>
        </ul>

        <UserMenu
          isBurgerActive={isBurgerActive}
          setIsBurgerActive={setIsBurgerActive}
        />
      </div>
    </nav>
  );
};

export { NavLinks };
