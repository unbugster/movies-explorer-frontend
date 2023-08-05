import "./SavedMovies.css";
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
          <MoviesCardList movies={"saved-movies"} />
        </div>
      </section>
    </>
  );
};

export { SavedMovies };
