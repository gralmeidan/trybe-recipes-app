import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Title from './Title';
import ProfileIcon from './ProfileIcon';
import SearchBar from '../Search/SearchBar';
import SearchIcon from '../Search/SearchIcon';

const Header = ({ title }) => {
  const [searchEnable, setSearchEnable] = useState(false);
  const haveSearch = ['/foods', '/drinks'];
  const location = useLocation();

  const handleSearch = () => {
    setSearchEnable(!searchEnable);
  };

  return (
    <>
      <Navbar bg="light" fixed="top" className="border-bottom border-warning">
        <Nav className="me-auto">
          <Nav.Link href="/profile">
            <ProfileIcon />
          </Nav.Link>
        </Nav>
        <Container className="d-flex flex-column">
          <Navbar.Text>
            <Title title={ title } />
          </Navbar.Text>
        </Container>
        <Form className="d-flex">
          { haveSearch.includes(location.pathname)
          && <SearchIcon handleSearch={ handleSearch } /> }
        </Form>
      </Navbar>
      { searchEnable && <SearchBar /> }
    </>
  // <header>
  //   <div id="header-profile">
  //     <Link to="/profile">
  //       <img
  //         src={ profileIcon }
  //         alt="Profile"
  //         data-testid="profile-top-btn"
  //       />
  //     </Link>
  //   </div>
  //   <div id="header-title">
  //     <h1 data-testid="page-title">
  //       { title }
  //     </h1>
  //   </div>
  //   { haveSearch.includes(location.pathname)
  //   && <SearchIcon handleSearch={ handleSearch } /> }
  // </header>
  // { searchEnable && <SearchBar /> }
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
