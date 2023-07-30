import "./SearchForm.css";
import searchIcon from "../../images/movies_search.svg";
import { FilterCheckbox } from "../FilterCheckbox";

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <div className="search__filter">
            <input
              className="search__form-input"
              type="search"
              placeholder="Фильм"
              required
            />

            <button type="submit" className="search__form-button">
              <img src={searchIcon} alt="Иконка поиска" />
            </button>
          </div>
          <div className="search__short-films">
            <FilterCheckbox />
          </div>
        </form>
      </div>
    </section>
  );
};

export { SearchForm };
