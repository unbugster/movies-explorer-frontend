import "./Portfolio.css";
import icon from "../../images/portfolio_link-arrow.svg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container container">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              href="https://github.com/unbugster/how-to-learn"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="portfolio__description">Статичный сайт</span>
              <img
                src={icon}
                alt="Иконка в виде стрелки"
                className="portfolio__icon"
              />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com/unbugster/russian-travel"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="portfolio__description">Адаптивный сайт</span>
              <img
                src={icon}
                alt="Иконка в виде стрелки"
                className="portfolio__icon"
              />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com/unbugster/react-mesto-api-full-gha"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="portfolio__description">
                Одностраничное приложение
              </span>
              <img
                src={icon}
                alt="Иконка в виде стрелки"
                className="portfolio__icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Portfolio };
