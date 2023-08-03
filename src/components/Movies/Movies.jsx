import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Movies.css";
import { moviesData } from "../../utils/movies";

const Movies = () => {
  return (
    <>
      <SearchForm />
      <section className="movies" aria-label="Галерея фильмов">
        <div className="movies__container container">
          <MoviesCardList movies={moviesData} />
        </div>
      </section>
    </>
  );
};

export { Movies };
