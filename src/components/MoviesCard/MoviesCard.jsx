import "./MoviesCard.css";
import { getHoursAndMinutes } from "../../utils/functions";

const MoviesCard = ({ movie }) => {
  return (
    <li className="movies__item moviescard">
      <img
        className="moviescard__image"
        src={movie.thumbnail}
        alt={movie.nameRU}
      />
      <div className="moviescard__details">
        <p className="moviescard__title">{movie.nameRU}</p>
        <p className="moviescard__duration">
          {getHoursAndMinutes(movie.duration)}
        </p>

        <button
          className={`moviescard__like-btn ${
            movie.isLiked ? " moviescard__like-btn_liked" : ""
          }`}
        ></button>

        <button className={`moviescard__delete-btn`}></button>
      </div>
    </li>
  );
};

export { MoviesCard };
