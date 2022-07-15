import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';

import profileIcon from '../../images/profileIcon.svg';
import SearchIcon from './SearchIcon';

const Header = ({ title }) => {
  const [searchEnable, setSearchEnable] = useState(false);
  const haveSearch = ['/foods', '/drinks'];
  const location = useLocation();

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
        { haveSearch.includes(location.pathname)
        && <SearchIcon handleSearch={ handleSearch } /> }
      </header>
      { searchEnable && <SearchBar /> }
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
