import React from 'react';
import PropTypes from 'prop-types';

const SearchOptions = ({ option, handleChange }) => (
  <div>
    <label htmlFor="ingredient-search-radio">
      <input
        type="radio"
        id="ingredient-search-radio"
        name="search-radio"
        value="ingredient"
        checked={ option === 'ingredient' }
        onChange={ handleChange }
        data-testid="ingredient-search-radio"
      />
      Ingredient
    </label>
    <label htmlFor="name-search-radio">
      <input
        type="radio"
        id="name-search-radio"
        name="search-radio"
        value="name"
        checked={ option === 'name' }
        onChange={ handleChange }
        data-testid="name-search-radio"
      />
      Name
    </label>
    <label htmlFor="first-letter-search-radio">
      <input
        type="radio"
        id="first-letter-search-radio"
        name="search-radio"
        value="first-letter"
        checked={ option === 'first-letter' }
        onChange={ handleChange }
        data-testid="first-letter-search-radio"
      />
      First Letter
    </label>
  </div>
);

SearchOptions.propTypes = {
  option: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchOptions;
