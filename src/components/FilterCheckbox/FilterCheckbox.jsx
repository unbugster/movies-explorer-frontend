import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  return (
    <div className="filter-checkbox">
      <p className="filter-checkbox__text">Короткометражки</p>
      <input className="filter-checkbox__input" type="checkbox" id="switch" />
      <label className="filter-checkbox__label" htmlFor="switch"></label>
    </div>
  );
};

export { FilterCheckbox };
