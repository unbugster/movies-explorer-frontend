import "./SavedMovies.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { useCallback, useState } from "react";
import { Preloader } from "../Preloader";

const SavedMovies = (props) => {
  const { movies, onDeleteMovie, apiError } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const filterMovies = useCallback(
    (query, isShort) => {
      const filtered = movies.filter((movie) => {
        return (
          (!isShort || movie.duration <= 40) &&
          movie.nameRU.toLowerCase().trim().includes(query.toLowerCase())
        );
      });

      setNotFound(query && !filtered.length);
      setFilteredMovies(filtered);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    },
    [movies]
  );

  return (
    <>
      <SearchForm onFilter={filterMovies} />
      <section
        className="saved-movies"
        aria-label="Галерея сохраненных фильмов"
      >
        <div className="saved-movies__container container">
          {isLoading && <Preloader />}
          {!isLoading && !apiError && (
            <MoviesCardList
              movies={filteredMovies}
              onDeleteMovie={onDeleteMovie}
            />
          )}
          {!isLoading && !apiError && notFound && (
            <p className="movies__not-found">Ничего не найдено</p>
          )}
          {apiError && (
            <p className="movies__error">
              Во время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного и попробуйте
              ещё раз
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export { SavedMovies };
