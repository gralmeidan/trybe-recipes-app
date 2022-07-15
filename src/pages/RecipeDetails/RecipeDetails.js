import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import getFood from '../../services/getFoodAPI';
import getDrink from '../../services/getDrinkAPI';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import getIngredientAndMeasureList from '../../helpers/getIngredientAndMeasureList';

function RecipeDetails({ match: { params: { id }, path } }) {
  const [recipe, setRecipe] = useContext({});

  useEffect(() => {
    // const info = {};
    if (path.includes('foods')) {
      const foodRecipe = getFood(id);
      const ingredients = getIngredientAndMeasureList(foodRecipe);
      const { strCategory: category,
        strMeal: title, strMealThumb: photo,
        strYoutube: video,
      } = info;
      setRecipe({ isFood: true, photo, title, category, video, ingredients });
    }
    if (path.includes('drinks')) {
      setRecipe(getDrink(id));
    }
  }, []);

  return (
    <div>
      <RecipeInfo recipe={ recipe } />
    </div>
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeDetails;
