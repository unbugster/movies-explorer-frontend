import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard";
import useResize from "../../hooks/useResize.js";
import { Button } from "../Button";
// import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const MoviesCardList = (props) => {
  const { movies, onSaveMovie, onDeleteMovie } = props;
  const size = useResize();
  // const location = useLocation();
  const [moviesToAdd, setMoviesToAdd] = useState(0);

  const handleClick = () => {
    setMoviesToAdd((prev) => prev + (size.width >= 1280 ? 4 : 2));
  };

  useEffect(() => {
    setMoviesToAdd(0);
  }, [movies]);

  const moviesToRender = useMemo(() => {
    const countToRender = size.width < 768 ? 5 : size.width < 1280 ? 8 : 16;

    return movies.slice(0, countToRender + moviesToAdd);
  }, [movies, moviesToAdd, size]);

  return (
    <>
      <ul className="movies-list">
        {moviesToRender.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
            />
          );
        })}
      </ul>

      {movies.length > moviesToRender.length && (
        <Button
          className="button_type_more"
          btnType="button"
          transparent
          onClick={handleClick}
        >
          Еще
        </Button>
      )}
    </>
  );
};

export { MoviesCardList };
