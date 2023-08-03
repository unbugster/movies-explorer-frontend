import classNames from "classnames";
import "./UserMenu.css";
import { Button } from "../Button/Button";

const UserMenu = (props) => {
  const { isBurgerActive, setIsBurgerActive } = props;

  const cls = isBurgerActive
    ? "user-menu_position_bottom"
    : "user-menu_position_right";

  const handleLinkClick = () => {
    setIsBurgerActive(false);
  };
  return (
    <Button
      to="/profile"
      onClick={handleLinkClick}
      transparent
      className={classNames("user-menu", cls)}
    >
      Аккаунт
    </Button>
  );
};

export { UserMenu };
