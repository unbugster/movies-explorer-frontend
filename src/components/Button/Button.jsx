import classNames from "classnames";
import "./Button.css";
import { NavLink } from "react-router-dom";

const Button = (props) => {
  const {
    round,
    transparent,
    children,
    className,
    hidden,
    to,
    onClick,
    activeCls,
  } = props;

  const cls = classNames("button", className, {
    button_transparent: transparent,
    button_round: round,
    button_lg_hidden: hidden,
  });

  return to ? (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return `${cls} ${isActive ? activeCls : ""}`;
      }}
      onClick={onClick}
    >
      {children}
    </NavLink>
  ) : (
    <button type="button" className={cls}>
      {children}
    </button>
  );
};

export { Button };
