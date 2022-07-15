import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import getFood from '../../services/getFoodAPI';
import getDrink from '../../services/getDrinkAPI';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import getIngredientAndMeasureList from '../../helpers/getIngredientAndMeasureList';

function RecipeDetails({ match: { params: { id }, path } }) {
  const [recipe, setRecipe] = useContext({});

  useEffect(() => {
    if (path.includes('foods')) {
      const foodRecipe = getFood(id);
      const ingredients = getIngredientAndMeasureList(foodRecipe);
      const { strCategory: category,
        strMeal: title, strMealThumb: photo,
        strYoutube: video,
        strInstructions: instructions,
      } = foodRecipe;
      setRecipe({
        isDetails: true,
        isFood: true,
        photo,
        title,
        category,
        instructions,
        video,
        ingredients });
    }
    if (path.includes('drinks')) {
      const drinkRecipe = getDrink(id);
      const ingredients = getIngredientAndMeasureList(drinkRecipe);
      const { strAlcoholic: category,
        strDrink: title, strDrinkThumb: photo,
        strInstructions: instructions,
      } = drinkRecipe;
      setRecipe({
        isDetails: true,
        isFood: false,
        photo,
        title,
        category,
        instructions,
        ingredients });
    }
  }, [id, path, setRecipe]);

  return (
    <section>
      <RecipeInfo recipe={ recipe } />
      <BasicCard data-testid={ `${index}-recomendation-card` } />
      {isDone ? (
        <div className="start-recipe-btn">
        <button
          type="button"
          data-testid="start-recipe-btn"
        >
          Start Recipe
        </button>
      </div>) : }
    </section>
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
