import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getRecipeAPI from '../../services/getRecipeAPI';
import ShareButton from '../../components/ShareButton';
import FavoriteButton from '../../components/FavoriteButton';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import getIngredientAndMeasureList from '../../helpers/getIngredientAndMeasureList';
import useLocalStorage from '../../hooks/useLocalStorage';

async function getRecipe(setRecipe, inProgress, setInProgress, { id, path }) {
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

  if (!inProgress[id]) {
    setInProgress((prev) => ({
      ...prev,
      [id]: ingredients.map((obj) => ({
        ...obj,
        checked: false,
      })),
    }));
  }
}
//

function RecipeInProgress({ match: { params: { id }, path } }) {
  const [recipe, setRecipe] = useState();
  const [
    inProgress,
    setInProgress,
  ] = useLocalStorage('inProgressRecipes', {});

  useEffect(() => {
    getRecipe(setRecipe, inProgress, setInProgress, { id, path });
  }, [id, path]);

  const handleIngredientCheck = ({ target }) => {
    const { checked } = target;
    target
      .parentElement
      .style
      .textDecoration = checked ? 'line-through' : 'initial';

    setInProgress((prev) => ({
      ...prev,
      [id]: prev[id].map((obj) => (obj.ingredient !== target.value
        ? obj
        : {
          ...obj,
          checked,
        })),
    }));
  };

  return !recipe || !inProgress[id] ? null : (
    <div>
      <ShareButton />
      <FavoriteButton
        info={ recipe }
        id={ path.includes('food') ? recipe.idMeal : recipe.idDrink }
      />
      <RecipeInfo
        recipe={ {
          ...recipe,
          ingredients: inProgress[id],
        } }
        handleChange={ handleIngredientCheck }
        checkedIngredients={ inProgress[id] }
      />
      <button
        data-testid="finish-recipe-btn"
        type="button"
      >
        Finalizar
      </button>
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
