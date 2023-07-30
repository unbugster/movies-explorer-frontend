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
    <div className={classNames("nav", cls)}>
      <div className="nav__container">
        <div className={classNames("nav__links")}>
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
          <Button
            to="/movies"
            onClick={handleLinkClick}
            transparent
            className={btnCls}
            activeCls={activeCls}
          >
            Фильмы
          </Button>
          <Button
            to="/saved-movies"
            onClick={handleLinkClick}
            transparent
            className={btnCls}
            activeCls={activeCls}
          >
            Сохранённые фильмы
          </Button>
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
