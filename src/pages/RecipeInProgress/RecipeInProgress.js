import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getFood from '../../services/getFoodAPI';
import getDrink from '../../services/getDrinkAPI';
import ShareButton from '../../components/ShareButton';
import FavoriteButton from '../../components/FavoriteButton';

function RecipeInProgress({ match: { params: { id }, path } }) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async (callback) => {
      const response = await callback(id);
      setRecipe(response.drinks ? response.drinks[0] : response);
    };
    getRecipe(path.includes('food') ? getFood : getDrink);
  }, [id, path]);

  return recipe && (
    <div>
      <ShareButton />
      <FavoriteButton
        info={ recipe }
        id={ path.includes('food') ? recipe.idMeal : recipe.idDrink }
      />
      RecipeInProgress
    </div>
  );
}

RecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeInProgress;
