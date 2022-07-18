import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from '../ShareButton';
import FavoriteButton from '../FavoriteButton';

function DetailedCard(props) {
  const {
    type,
    nationality,
    category,
    alcoholicOrNot,
    name,
    image,
    doneDate,
    tags,
    index,
    id,
  } = props;
  return (
    <div>
      <Link to={ `/${type}s/${id}` }>
        <img
          width={ 100 }
          src={ image }
          alt=""
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <p data-testid={ `${index}-horizontal-name` }>{name}</p>
      <p data-testid={ `${index}-horizontal-top-text` }>
        {type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
      </p>
      <ShareButton
        dataTest={ `${index}-horizontal-share-btn` }
        path={ `/${type}s/${id}` }
      />
      { doneDate ? <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p> : (
        <FavoriteButton
          dataTest={ `${index}-horizontal-favorite-btn` }
          info={ props }
        />
      )}
      <div>
        { tags && tags.map((tag, i) => (
          <span key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</span>
        ))}
      </div>
    </div>
  );
}

DetailedCard.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  doneDate: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
};

DetailedCard.defaultProps = {
  doneDate: undefined,
  tags: undefined,
};

export default DetailedCard;
