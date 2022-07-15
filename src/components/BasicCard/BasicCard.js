import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BasicCard(props) {
  const { pathname, index } = props;
  const type = pathname === '/foods' ? 'Meal' : 'Drink';
  const {
    [`str${type}Thumb`]: img,
    [`str${type}`]: title,
    [`id${type}`]: id,
  } = props;

  return (
    <Link
      data-testid={ `${index}-recipe-card` }
      style={ {
        display: 'flex',
      } }
      to={ `${pathname}/${id}` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ img }
        alt=""
        width={ 100 }
      />
      <p
        data-testid={ `${index}-card-name` }
      >
        {title}
      </p>
    </Link>
  );
}

BasicCard.propTypes = {
  pathname: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default BasicCard;
