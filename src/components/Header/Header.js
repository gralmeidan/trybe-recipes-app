import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

const Header = ({ title }) => (
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
      <img
        src={ searchIcon }
        alt="Search Recipes"
        data-testid="search-top-btn"
      />
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Teste',
};

export default Header;
