import classNames from "classnames";
import "./Button.css";

const Button = (props) => {
  const { round, transparent, children, className, hidden } = props;

  const cls = classNames("button", className, {
    button_transparent: transparent,
    button_round: round,
    button_lg_hidden: hidden,
  });

  return <button className={cls}>{children}</button>;
};

export { Button };
