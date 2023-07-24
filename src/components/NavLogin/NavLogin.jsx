import { Button } from "../Button";
import "./NavLogin.css";

const NavLogin = () => {
  return (
    <div className="login-menu">
      <Button transparent>Регистрация</Button>
      <Button>Войти</Button>
    </div>
  );
};

export { NavLogin };
