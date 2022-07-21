import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './footer.css';

function Footer() {
  return (
    <Navbar
      bg="light"
      fixed="bottom"
      className="border-top border-warning"
      data-testid="footer"
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/drinks">
            <img
              src={ drinkIcon }
              alt="Drinks"
              data-testid="drinks-bottom-btn"
            />
          </Nav.Link>
        </Nav>
        <Nav className="d-flex">
          <Nav.Link href="/foods">
            <img
              src={ mealIcon }
              alt="Foods"
              data-testid="food-bottom-btn"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    // <footer data-testid="footer" className="footer">
    //   <div>
    //     <Link to="/drinks">
    //       <img
    //         src={ drinkIcon }
    //         alt="Drinks"
    //         data-testid="drinks-bottom-btn"
    //       />
    //     </Link>
    //   </div>
    //   <div>
    //     <Link to="/foods">
    //       <img
    //         src={ mealIcon }
    //         alt="Drinks"
    //         data-testid="food-bottom-btn"
    //       />
    //     </Link>
    //   </div>
    // </footer>
  );
}

export default Footer;
