import "./SavedMovies.css";
import { moviesData } from "../../utils/movies.js";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";

const SavedMovies = () => {
  return (
    <>
      <SearchForm />
      <section
        className="saved-movies"
        aria-label="Галерея сохраненных фильмов"
      >
        <div className="saved-movies__container container">
          <MoviesCardList movies={moviesData} />
        </div>
      </section>
    </>
  );
};

export { SavedMovies };
