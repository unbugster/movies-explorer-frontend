import "./MoviesCard.css";
import { getHoursAndMinutes } from "../../utils/functions";
import { API_BFMOVIES_URL } from "../../utils/config";
import { useLocation } from "react-router-dom";

const MoviesCard = (props) => {
  const { movie, savedMovies, onSaveMovie, onDeleteMovie } = props;
  const location = useLocation();
  const isMoviesPage = location.pathname === "/movies";
  const isSavedMoviesPage = location.pathname === "/saved-movies";

  const myBdLikedMovie = savedMovies
    ? savedMovies.find((item) => item.movieId === movie.id)
    : "";

  const handleLike = () => {
    onSaveMovie(movie, myBdLikedMovie);
  };

  const handleDelete = () => {
    onDeleteMovie(movie._id);
  };

  const imageUrl = movie.image.url
    ? `${API_BFMOVIES_URL}${movie.image.url}`
    : movie.image;
  return (
    <li className="movies-list__item moviescard">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="moviescard__image" src={imageUrl} alt={movie.nameRU} />
      </a>
      <div className="moviescard__details">
        <div className="moviescard__title-container">
          <h2 className="moviescard__title">{movie.nameRU}</h2>

          {isMoviesPage && (
            <button
              onClick={handleLike}
              className={`moviescard__like-btn ${
                myBdLikedMovie ? " moviescard__like-btn_liked" : ""
              }`}
            ></button>
          )}

          {isSavedMoviesPage && (
            <button
              onClick={handleDelete}
              className={`moviescard__delete-btn`}
            ></button>
          )}
        </div>
        <p className="moviescard__duration">
          {getHoursAndMinutes(movie.duration)}
        </p>
      </div>
    </li>
  );
};

export { MoviesCard };
