import "./SearchForm.css";
import searchIcon from "../../images/movies_search.svg";
import { FilterCheckbox } from "../FilterCheckbox";
import { useEffect, useState } from "react";

const SearchForm = (props) => {
  const { onFilter } = props;
  const [searchText, setSearchText] = useState(() => {
    return localStorage.getItem("searchQuery");
  });
  const [isEmpty, setIsEmpty] = useState(true);
  const [isShort, setIsShort] = useState(() => {
    const value = localStorage.getItem("isShort");
    return !value || value === "false" ? false : true;
  });

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

  const handleShortToggle = () => {
    setIsShort((v) => !v);
  };

  useEffect(() => {
    onFilter(searchText, isShort);
    localStorage.setItem("searchQuery", searchText);
    localStorage.setItem("isShort", isShort);
  }, [onFilter, searchText, isShort]);

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
            <FilterCheckbox checked={isShort} onChange={handleShortToggle} />
          </div>
        </form>
      </div>
    </section>
  );
};

export { SearchForm };
