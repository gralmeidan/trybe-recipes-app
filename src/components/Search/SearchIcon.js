import React from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../../images/searchIcon.svg';

const SearchIcon = ({ handleSearch }) => (
  <div id="header-search">
    <button
      type="button"
      name="search-top-btn"
      id="search-top-btn"
      onClick={ handleSearch }
    >
      <img
        src={ searchIcon }
        alt="Search Recipes"
        data-testid="search-top-btn"
      />
    </button>
  </div>
);

SearchIcon.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchIcon;
