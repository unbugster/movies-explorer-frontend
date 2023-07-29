import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import useResize from "../../hooks/useResize.js";
import { Button } from "../Button/Button";

const MoviesCardList = ({ movies }) => {
  let size = useResize();

  return (
    <>
      <ul className="movies__list">
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
      <Button className="button_type_more" btnType="button" transparent>
        Еще
      </Button>
    </>
  );
};

export { MoviesCardList };
