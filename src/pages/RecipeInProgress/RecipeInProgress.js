import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getRecipeAPI from '../../services/getRecipeAPI';
import ShareButton from '../../components/ShareButton';
import FavoriteButton from '../../components/FavoriteButton';

function RecipeInProgress({ match: { params: { id }, path } }) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      const type = path.includes('food') ? 'meal' : 'cocktail';
      const response = await getRecipeAPI(type, id);
      setRecipe(response);
    };
    getRecipe();
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
