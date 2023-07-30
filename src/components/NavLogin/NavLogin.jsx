import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./NavLogin.css";

const NavLogin = () => {
  return (
    <div className="login-menu">
      <Link to="/signup">
        <Button transparent>Регистрация</Button>
      </Link>
      <Link to="/signin">
        <Button>Войти</Button>
      </Link>
    </div>
  );
};

export { NavLogin };
