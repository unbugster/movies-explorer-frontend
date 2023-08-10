import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = (props) => {
  const { checked, onChange } = props;

  return (
    <div className="filter-checkbox">
      <p className="filter-checkbox__text">Короткометражки</p>
      <input
        className="filter-checkbox__input"
        type="checkbox"
        id="switch"
        checked={checked}
        onChange={onChange}
      />
      <label className="filter-checkbox__label" htmlFor="switch"></label>
    </div>
  );
};

export { FilterCheckbox };
