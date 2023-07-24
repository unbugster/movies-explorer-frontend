import "./Promo.css";
import scribble from "../../images/promo_scribble.svg";

const Promo = () => {
  return (
    <section aria-label="Cтартовая страница" className="promo">
      <div className="promo__container container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <img className="promo__illustration" src={scribble} alt="Закорючка" />
      </div>
    </section>
  );
};

export { Promo };
