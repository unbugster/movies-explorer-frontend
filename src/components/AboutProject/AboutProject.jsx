import { SectionTitle } from "../SectionTitle";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section aria-label="Описание этапов дипломного проекта" className="about">
      <div className="about__container container">
        <SectionTitle>О проекте</SectionTitle>

        <ul className="about__list">
          <li className="about__item">
            <h3 className="about__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>

          <li className="about__item">
            <h3 className="about__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <div className="about__result">
          <div className="about__result-week about__result-week_black">
            1 неделя
          </div>
          <div className="about__result-week">4 недели</div>
          <div className="about__result-web">Back-end</div>
          <div className="about__result-web">Front-end</div>
        </div>
      </div>
    </section>
  );
};

export { AboutProject };
