import { SectionTitle } from "../SectionTitle";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section
      aria-label="Описание этапов дипломного проекта"
      className="about-project"
    >
      <div className="about-project__container container">
        <SectionTitle>О проекте</SectionTitle>

        <ul className="about-project__list">
          <li className="about-project__item">
            <h3 className="about-project__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>

          <li className="about-project__item">
            <h3 className="about-project__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <div className="about-project__result">
          <div className="about-project__result-week about-project__result-week_black">
            1 неделя
          </div>
          <div className="about-project__result-week">4 недели</div>
          <div className="about-project__result-web">Back-end</div>
          <div className="about-project__result-web">Front-end</div>
        </div>
      </div>
    </section>
  );
};

export { AboutProject };
