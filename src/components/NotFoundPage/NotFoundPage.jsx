import { Button } from "../Button";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = (props) => {
  const { isLoggedIn } = props;
  const navigate = useNavigate();

  const goBack = () => {
    isLoggedIn ? navigate(-1) : navigate("/");
  };

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <Button transparent className="not-found__link" onClick={goBack}>
        Назад
      </Button>
    </section>
  );
};

export { NotFoundPage };
