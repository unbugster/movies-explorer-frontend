import classNames from "classnames";
import "./UserMenu.css";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

const UserMenu = (props) => {
  const { isBurgerActive, setIsBurgerActive } = props;

  const cls = isBurgerActive
    ? "user-menu_position_bottom"
    : "user-menu_position_right";

  const handleLinkClick = () => {
    setIsBurgerActive((v) => !v);
  };
  return (
    <NavLink to="/profile" onClick={handleLinkClick}>
      <Button transparent className={classNames("user-menu", cls)}>
        Аккаунт
      </Button>
    </NavLink>
  );
};

export { UserMenu };
