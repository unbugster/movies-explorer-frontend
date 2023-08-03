import "./AboutMe.css";
import studentPhoto from "../../images/abautMe_studentPhoto.jpg";
import { SectionTitle } from "../SectionTitle";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container container">
        <SectionTitle>Студент</SectionTitle>
        <div className="about-me__box">
          <img
            className="about-me__image"
            src={studentPhoto}
            alt="Фотография студента"
          />
          <div className="about-me__description">
            <p className="about-me__title">Виталий</p>
            <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё
              увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
              компании «СКБ Контур». После того, как прошёл курс по
              веб&#8209;разработке, начал заниматься фриланс&#8209;заказами и
              ушёл с постоянной работы.
            </p>

            <a
              className="about-me__link"
              href="https://github.com/unbugster"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutMe };
