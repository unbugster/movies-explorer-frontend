import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import useResize from "../../hooks/useResize.js";
import { Button } from "../Button/Button";
import { useLocation } from "react-router-dom";

const MoviesCardList = ({ movies }) => {
  let size = useResize();
  let location = useLocation();

  movies =
    location.pathname === "/saved-movies"
      ? movies.filter((m) => m.isLiked)
      : movies;

  movies =
    location.pathname === "/saved-movies" && size.width <= 450
      ? movies.slice(0, 2)
      : movies;

  return (
    <>
      <ul className="movies-list">
        {size.width <= 450
          ? movies?.slice(0, 5).map((movie) => {
              return <MoviesCard key={movie.movieId} movie={movie} />;
            })
          : size.width <= 850
          ? movies?.slice(0, 8).map((movie) => {
              return <MoviesCard key={movie.movieId} movie={movie} />;
            })
          : movies?.map((movie) => {
              return <MoviesCard key={movie.movieId} movie={movie} />;
            })}
      </ul>
      {location.pathname === "/saved-movies" ? (
        <div className="movies-placeholder"></div>
      ) : (
        <Button className="button_type_more" btnType="button" transparent>
          Еще
        </Button>
      )}
    </>
  );
};

export { MoviesCardList };
