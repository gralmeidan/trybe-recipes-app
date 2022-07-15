import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';

import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

const Header = ({ title }) => {
  const [searchEnable, setSearchEnable] = useState(false);

  const handleSearch = () => {
    setSearchEnable(!searchEnable);
  };

  return (
    <>
      <header>
        <div id="header-profile">
          <Link to="/profile">
            <img
              src={ profileIcon }
              alt="Profile"
              data-testid="profile-top-btn"
            />
          </Link>
        </div>
        <div id="header-title">
          <h1 data-testid="page-title">
            { title }
          </h1>
        </div>
        <div id="header-search">
          <button
            type="button"
            name="search-top-btn"
            id="search-top-btn"
            onClick={ handleSearch }
            data-testid="search-top-btn"
          >
            <img
              src={ searchIcon }
              alt="Search Recipes"
              data-testid="search-top-btn"
            />
          </button>
        </div>
      </header>
      { searchEnable && <SearchBar /> }
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Teste',
};

export default Header;
