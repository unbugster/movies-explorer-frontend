import "./SearchForm.css";
import searchIcon from "../../images/movies_search.svg";
import { FilterCheckbox } from "../FilterCheckbox";
import { useState } from "react";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (evt) => {
    setSearchText(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setIsEmpty(false);
      return;
    }
  };

  return (
    <section className="search">
      <div className="search__container container">
        <form
          className="search__form"
          aria-label="Форма поиска фильмов"
          onSubmit={handleSubmit}
        >
          <div className="search__filter">
            <input
              className="search__form-input"
              placeholder="Фильм"
              value={searchText || ""}
              onChange={handleChange}
              name="search"
              min="1"
            />

            <button type="submit" className="search__form-button">
              <img src={searchIcon} alt="Иконка поиска" />
            </button>
          </div>
          <span className="search__form-input_error">
            {!isEmpty && "Нужно ввести ключевое слово"}
          </span>
          <div className="search__short-films">
            <FilterCheckbox />
          </div>
        </form>
      </div>
    </section>
  );
};

export { SearchForm };
