import classNames from "classnames";
import "./UserMenu.css";
import { Button } from "../Button/Button";

const UserMenu = (props) => {
  const { isBurgerActive } = props;

  const cls = isBurgerActive
    ? "user-menu_position_bottom"
    : "user-menu_position_right";
  return (
    <Button transparent className={classNames("user-menu", cls)}>
      Аккаунт
    </Button>
  );
};

export { UserMenu };
