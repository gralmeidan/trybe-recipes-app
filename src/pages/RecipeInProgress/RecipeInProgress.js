import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getRecipeAPI from '../../services/getRecipeAPI';
import ShareButton from '../../components/ShareButton';
import FavoriteButton from '../../components/FavoriteButton';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import getIngredientAndMeasureList from '../../helpers/getIngredientAndMeasureList';

function RecipeInProgress({ match: { params: { id }, path } }) {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const getRecipe = async () => {
      const isFood = path.includes('food');
      const type = isFood ? 'meal' : 'cocktail';
      const response = await getRecipeAPI(type, id);
      const ingredients = getIngredientAndMeasureList(response);
      const strType = isFood ? 'Meal' : 'Drink';
      const strCategory = isFood ? 'Category' : 'Alcoholic';
      setRecipe({
        ...response,
        isDetails: false,
        isFood,
        title: response[`str${strType}`],
        img: response[`str${strType}Thumb`],
        category: response[`str${strCategory}`],
        instructions: response.strInstructions,
        video: response.strYoutube,
        ingredients,
      });
    };
    getRecipe();
  }, [id, path]);

  return !recipe ? null : (
    <div>
      <ShareButton />
      <FavoriteButton
        info={ recipe }
        id={ path.includes('food') ? recipe.idMeal : recipe.idDrink }
      />
      <RecipeInfo recipe={ recipe } />
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
