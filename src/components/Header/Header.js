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
      <Navbar bg="light" className="border-bottom border-warning">
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
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
