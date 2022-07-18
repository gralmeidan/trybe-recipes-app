import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import Outline from '../images/whiteHeartIcon.svg';
import Fill from '../images/blackHeartIcon.svg';

function FavoriteButton({ info, dataTest }) {
  const [favorites, setFavorite] = useLocalStorage('favoriteRecipes', []);
  const { pathname } = useLocation();
  const type = pathname.includes('food') ? 'Meal' : 'Drink';

  const recipe = pathname.includes('favorite') ? info : ({
    id: info[`id${type}`],
    type: pathname.includes('food') ? 'food' : 'drink',
    nationality: info.strArea || '',
    category: info.strCategory,
    alcoholicOrNot: info.strAlcoholic || '',
    name: info[`str${type}`],
    image: info[`str${type}Thumb`],
  });

  const favorited = favorites.find(({ id }) => id === recipe.id);

  const handleClick = () => {
    setFavorite((prev) => (!favorited
      ? [...prev, recipe]
      : prev.filter(({ id }) => id !== recipe.id)
    ));
  };

  return (
    <button
      data-testid={ dataTest }
      type="button"
      onClick={ handleClick }
      src={ favorited ? Fill : Outline }
      alt="Share"
    >
      <img src={ favorited ? Fill : Outline } alt="Share" />
    </button>
  );
}

FavoriteButton.propTypes = {
  info: PropTypes.shape({
    strArea: PropTypes.string,
    strCategory: PropTypes.string,
    strAlcoholic: PropTypes.string,
  }).isRequired,
  dataTest: PropTypes.string,
};

FavoriteButton.defaultProps = {
  dataTest: 'favorite-btn',
};

export default FavoriteButton;
