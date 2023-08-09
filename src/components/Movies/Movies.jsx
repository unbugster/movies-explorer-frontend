import { useCallback, useEffect, useState } from "react";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Movies.css";
import { Preloader } from "../Preloader";

const Movies = (props) => {
  const {
    movies,
    savedMovies,
    apiError,
    onSaveMovie,
    onDeleteMovie,
    setIsSearched,
    isSearched,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const searchText = localStorage.getItem("searchQuery") || "";
  const isShortValue = localStorage.getItem("isShort");
  const initialShort = !isShortValue || isShortValue === "false" ? false : true;

  const filterMovies = useCallback(
    (query, isShort) => {
      const filtered = movies.filter((movie) => {
        return (
          (!isShort || movie.duration <= 40) &&
          movie.nameRU.toLowerCase().trim().includes(query.toLowerCase())
        );
      });
      setIsSearched(true);
      localStorage.setItem("searchQuery", query);
      localStorage.setItem("isShort", isShort);
      setNotFound(query && !filtered.length);
      setFilteredMovies(filtered);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    },
    [movies, setIsSearched]
  );

  useEffect(() => {
    if (!filteredMovies.length) {
      setIsLoading(true);
    }
  }, [filteredMovies.length]);

  return (
    <>
      <SearchForm
        onFilter={filterMovies}
        setIsSearched={setIsSearched}
        initialText={searchText}
        initialShort={initialShort}
      />
      <section className="movies" aria-label="Галерея фильмов">
        <div className="movies__container container">
          {isLoading && <Preloader />}
          {!isLoading && !apiError && isSearched && (
            <MoviesCardList
              movies={filteredMovies}
              savedMovies={savedMovies}
              onSaveMovie={onSaveMovie}
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

export { Movies };
