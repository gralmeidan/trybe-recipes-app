import React from 'react';
import PropTypes from 'prop-types';

function BasicCard(props) {
  const { pathname, index } = props;
  const type = pathname === '/foods' ? 'Meal' : 'Drink';
  const {
    [`str${type}Thumb`]: img,
    [`str${type}`]: title,
  } = props;

  return (
    <div
      data-testid={ `${index}-recipe-card` }
      style={ {
        display: 'flex',
      } }
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
    </div>
  );
}

BasicCard.propTypes = {
  pathname: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default BasicCard;
