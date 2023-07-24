import classNames from "classnames";
import "./SectionTitle.css";

const SectionTitle = (props) => {
  const { children, className } = props;

  return <h2 className={classNames("title", className)}>{children}</h2>;
};

export { SectionTitle };
