import "./MoviesCard.css";
import { getHoursAndMinutes } from "../../utils/functions";
import { apiBeatfilmMoviesUrl } from "../../utils/config";
const MoviesCard = ({ movie }) => {
  const imageUrl = movie.image.url
    ? `${apiBeatfilmMoviesUrl}${movie.image.url}`
    : movie.image;

  return (
    <li className="movies-list__item moviescard">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="moviescard__image" src={imageUrl} alt={movie.nameRU} />
      </a>
      <div className="moviescard__details">
        <div className="moviescard__title-container">
          <h2 className="moviescard__title">{movie.nameRU}</h2>
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
