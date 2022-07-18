import React from 'react';
import { Link } from 'react-router-dom';

import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <div>
        <Link to="/drinks">
          <img
            src={ drinkIcon }
            alt="Drinks"
            data-testid="drinks-bottom-btn"
          />
        </Link>
      </div>
      <div>
        <Link to="/foods">
          <img
            src={ mealIcon }
            alt="Drinks"
            data-testid="food-bottom-btn"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
