import { useCallback, useEffect, useState } from "react";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Movies.css";
import { Preloader } from "../Preloader";

const Movies = (props) => {
  const { movies } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterMovies = useCallback(
    (query, isShort) => {
      const filtered = movies.filter((movie) => {
        return (
          (!isShort || movie.duration <= 40) &&
          movie.nameRU.toLowerCase().trim().includes(query.toLowerCase())
        );
      });

      setFilteredMovies(filtered);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    },
    [movies]
  );

  useEffect(() => {
    if (!filteredMovies.length) {
      setIsLoading(true);
    }
  }, [filteredMovies.length]);

  return (
    <>
      <SearchForm onFilter={filterMovies} />
      <section className="movies" aria-label="Галерея фильмов">
        <div className="movies__container container">
          {isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList movies={filteredMovies} />
          )}
        </div>
      </section>
    </>
  );
};

export { Movies };
