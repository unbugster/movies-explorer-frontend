import classNames from "classnames";
import { Button } from "../Button";
import { UserMenu } from "../UserMenu";
import "./NavLinks.css";

const NavLinks = (props) => {
  const { isBurgerActive } = props;
  const cls = isBurgerActive ? "nav_opened" : "";

  return (
    <div className={classNames("nav", cls)}>
      <div className="nav__container">
        <div className={classNames("nav__links")}>
          <Button transparent hidden>
            Главная
          </Button>
          <Button transparent>Фильмы</Button>
          <Button transparent>Сохранённые фильмы</Button>
        </div>

        <UserMenu isBurgerActive={isBurgerActive} />
      </div>
    </div>
  );
};

export { NavLinks };
