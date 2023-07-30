import "./MoviesCard.css";
import { getHoursAndMinutes } from "../../utils/functions";

const MoviesCard = ({ movie }) => {
  return (
    <li className="movies-list__item moviescard">
      <img
        className="moviescard__image"
        src={movie.thumbnail}
        alt={movie.nameRU}
      />
      <div className="moviescard__details">
        <div className="moviescard__title-container">
          <p className="moviescard__title">{movie.nameRU}</p>
          <button
            type="button"
            className={`moviescard__like-btn ${
              movie.isLiked ? " moviescard__like-btn_liked" : ""
            }`}
          ></button>

          <button type="button" className={`moviescard__delete-btn`}></button>
        </div>
        <p className="moviescard__duration">
          {getHoursAndMinutes(movie.duration)}
        </p>
      </div>
    </li>
  );
};

export { MoviesCard };
