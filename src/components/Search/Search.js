import React from 'react';
import searchIcon from './search_icon.svg';
import locationIcon from './location_icon.svg';
import s from './Search.module.scss';

function Search() {
  return (
    <div className={s.container}>
      <div className={s.inputSearch}>
        <img src={searchIcon} alt="Icon search" />
        <input type="text" placeholder="Search products by name" />
      </div>
      <div className={s.inputLocation}>
        <img src={locationIcon} alt="Icon search" />
        <input type="type" placeholder="Location" />
      </div>
      <div className={`${s.btnSearch} center`}>search</div>
    </div>
  );
}

export default Search;
