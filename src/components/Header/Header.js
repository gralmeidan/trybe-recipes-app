import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

const Header = ({ title }) => (
  <header>
    <div>
      <Link to="/profile">
        <span data-testid="profile-top-btn">
          <img src={ profileIcon } alt="Profile" />
        </span>
      </Link>
    </div>
    <div>
      <h1 data-testid="page-title">
        { title }
      </h1>
    </div>
    <div>
      <span data-testid="search-top-btn">
        <img src={ searchIcon } alt="Search Recipes" />
      </span>
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
