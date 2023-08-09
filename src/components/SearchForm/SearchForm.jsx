import "./SearchForm.css";
import searchIcon from "../../images/movies_search.svg";
import { FilterCheckbox } from "../FilterCheckbox";
import { useEffect, useRef, useState } from "react";

const SearchForm = (props) => {
  const { onFilter, setIsSearched } = props;
  const searchText = useRef(localStorage.getItem("searchQuery") || "");
  const inputRef = useRef();
  const [submitTime, setSubmitTime] = useState(null);
  const [showSearchMessage, setShowSearchMessage] = useState(null);
  const [isShort, setIsShort] = useState(() => {
    const value = localStorage.getItem("isShort");
    return !value || value === "false" ? false : true;
  });

  const handleChange = (evt) => {
    searchText.current = evt.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitTime(Date.now());
    setIsSearched(true);
    if (!searchText.current) {
      setShowSearchMessage(true);
    } else {
      setShowSearchMessage(false);
    }
  };

  const handleShortToggle = () => {
    setIsShort((v) => !v);
  };

  useEffect(() => {
    onFilter(searchText.current, isShort);
    localStorage.setItem("searchQuery", searchText.current);
    localStorage.setItem("isShort", isShort);
  }, [onFilter, isShort, submitTime]);

  useEffect(() => {
    inputRef.current.value = searchText.current;
    inputRef.current.focus();
  }, [isShort, onFilter]);

  useEffect(() => {
    onFilter(searchText.current, isShort);
  }, [isShort, onFilter]);

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
              ref={inputRef}
              className="search__form-input"
              placeholder="Фильм"
              onChange={handleChange}
              name="search"
              min="1"
            />

            <button type="submit" className="search__form-button">
              <img src={searchIcon} alt="Иконка поиска" />
            </button>
          </div>
          <span className="search__form-input_error">
            {showSearchMessage && "Нужно ввести ключевое слово"}
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
