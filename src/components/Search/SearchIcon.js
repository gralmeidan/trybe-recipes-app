import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from 'react-bootstrap';
import searchIcon from '../../images/searchIcon.svg';

const SearchIcon = ({ handleSearch }) => (
  <Container>
    <Image
      type="button"
      id="search-top-btn"
      src={ searchIcon }
      onClick={ handleSearch }
      data-testid="search-top-btn"
    />
  </Container>
  // <div id="header-search">
  //   <button
  //     type="button"
  //     name="search-top-btn"
  //     id="search-top-btn"
  //     onClick={ handleSearch }
  //   >
  //     <img
  //       src={ searchIcon }
  //       alt="Search Recipes"
  //       data-testid="search-top-btn"
  //     />
  //   </button>
  // </div>
);

SearchIcon.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchIcon;
