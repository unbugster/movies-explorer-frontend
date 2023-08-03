import { Button } from "../Button";
import "./NavLogin.css";

const NavLogin = () => {
  return (
    <div className="login-menu">
      <Button className="login-menu__link" to="/signup" transparent>
        Регистрация
      </Button>
      <Button className="login-menu__link" to="/signin">
        Войти
      </Button>
    </div>
  );
};

export { NavLogin };
