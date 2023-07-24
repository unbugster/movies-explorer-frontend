import classNames from "classnames";
import "./Burger.css";

const Burger = (props) => {
  const { isBurgerActive, setIsBurgerActive } = props;
  const cls = isBurgerActive ? "burger_active" : "burger_inactive";

  const handleChange = () => {
    setIsBurgerActive((v) => !v);
  };

  return (
    <div
      className={classNames("burger", cls)}
      onClick={handleChange}
      style={{ color: "red" }}
    ></div>
  );
};

export { Burger };
