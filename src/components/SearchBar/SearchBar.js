import React, { useState } from 'react';
import S from './SearchBar.module.css';

const SearchBar = props => {
  const [value, setValue] = useState('');

  const handelChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const { onSubmit } = props;
    onSubmit(value);
  };

  return (
    <div className={S.Searchbar}>
      <form className={S.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={S.SearchFormButton}>
          <span className={S.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          onChange={handelChange}
          className={S.SearchFormInput}
          type="text"
          value={value}
          autoComplete="true"
          placeholder="Search movies and films"
        />
      </form>
    </div>
  );
};

export default SearchBar;
