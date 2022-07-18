import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import Outline from '../images/whiteHeartIcon.svg';
import Fill from '../images/blackHeartIcon.svg';

function FavoriteButton({ info }) {
  const [favorites, setFavorite] = useLocalStorage('favoriteRecipes', []);
  const { pathname } = useLocation();
  const type = pathname.includes('food') ? 'Meal' : 'Drink';

  const {
    [`id${type}`]: id,
    strArea: nationality = '',
    strCategory: category,
    strAlcoholic: alcoholicOrNot = '',
    [`str${type}`]: name,
    [`str${type}Thumb`]: image,
  } = info;

  // Info that will be sent to LocalStorage
  const recipe = {
    id,
    type: pathname.includes('food') ? 'food' : 'drink',
    nationality,
    category,
    alcoholicOrNot,
    name,
    image,
  };

  const favorited = favorites.find(({ id: id2 }) => id2 === id);

  const handleClick = () => {
    setFavorite((prev) => (!favorited
      ? [...prev, recipe]
      : prev.filter(({ id: id2 }) => id2 !== id)
    ));
  };

  return (
    <div>
      <button
        data-testid="favorite-btn"
        type="button"
        onClick={ handleClick }
        src={ favorited ? Fill : Outline }
        alt="Share"
      >
        <img src={ favorited ? Fill : Outline } alt="Share" />
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  info: PropTypes.shape({}).isRequired,
};

export default FavoriteButton;
