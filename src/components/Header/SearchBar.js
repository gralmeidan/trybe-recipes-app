import React, { useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (value) => {
    setSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="search">
      <form onSubmit={ (e) => handleSubmit(e) }>
        <div>
          <input
            type="text"
            id="search-input"
            name="search-input"
            value={ searchValue }
            onChange={ ({ target: { value } }) => handleChange(value) }
            data-testid="search-input"
          />
        </div>
        <div>
          <label htmlFor="ingredient-search-radio">
            <input
              type="radio"
              id="ingredient-search-radio"
              name="ingredient-search-radio"
              data-testid="ingredient-search-radio"
              value="ingredient"
            />
            Ingredient
          </label>
          <label htmlFor="name-search-radio">
            <input
              type="radio"
              id="name-search-radio"
              name="name-search-radio"
              data-testid="name-search-radio"
              value="name"
            />
            Name
          </label>
          <label htmlFor="first-letter-search-radio">
            <input
              type="radio"
              id="first-letter-search-radio"
              name="first-letter-search-radio"
              data-testid="first-letter-search-radio"
              value="first-letter"
            />
            First Letter
          </label>
        </div>
        <div>
          <button
            type="button"
            id="exec-search-btn"
            name="exec-search-btn"
            data-testid="exec-search-btn"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
