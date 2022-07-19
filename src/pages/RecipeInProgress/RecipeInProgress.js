import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getRecipeAPI from '../../services/getRecipeAPI';
import ShareButton from '../../components/ShareButton';
import FavoriteButton from '../../components/FavoriteButton';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import getIngredientAndMeasureList from '../../helpers/getIngredientAndMeasureList';
import useLocalStorage from '../../hooks/useLocalStorage';

// Tem q refatorar
async function getRecipe(setRecipe, inProgress, setInProgress, { id, path, type: ls }) {
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
    id: response[`id${strType}`],
    title: response[`str${strType}`],
    img: response[`str${strType}Thumb`],
    category: response[`str${strCategory}`],
    instructions: response.strInstructions,
    video: response.strYoutube,
    ingredients,
  });

  if (!inProgress[ls]?.[id]) {
    setInProgress((prev) => ({
      ...prev,
      [ls]: {
        [id]: ingredients.map((obj) => ({
          ...obj,
          checked: false,
        })),
      },
    }));
  }
}
//

function RecipeInProgress({ match: { params: { id }, path }, history }) {
  const [recipe, setRecipe] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState();
  const [type, setType] = useState(path.includes('food') ? 'meals' : 'cocktails');

  const [
    inProgress,
    setInProgress,
  ] = useLocalStorage('inProgressRecipes', {});
  const [, setIsDone] = useLocalStorage('doneRecipes', []);

  useEffect(() => {
    getRecipe(setRecipe, inProgress, setInProgress, { id, path, type });
    setType(path.includes('food') ? 'meals' : 'cocktails');
  }, [id, path]);

  useEffect(() => {
    setIsButtonDisabled(inProgress[type]?.[id]
      && !inProgress[type]?.[id].every(({ checked }) => checked));
  }, [inProgress, type, id]);

  const handleIngredientCheck = ({ target }) => {
    const { checked } = target;
    target
      .parentElement
      .style
      .textDecoration = checked ? 'line-through' : 'initial';

    setInProgress((prev) => ({
      ...prev,
      [type]: {
        [id]: prev[type][id].map((obj) => (obj.ingredient !== target.value
          ? obj
          : {
            ...obj,
            checked,
          })),
      },
    }));
  };

  const handleDoneRecipe = () => {
    setIsDone((prev) => ([
      ...prev,
      {
        ...recipe,
      },
    ]));

    history.push('/done-recipes');
  };

  return !recipe ? null : (
    <div>
      <ShareButton />
      <FavoriteButton
        info={ recipe }
        id={ path.includes('food') ? recipe.idMeal : recipe.idDrink }
      />
      {!inProgress[type]?.[id] ? null
        : (
          <div>
            <RecipeInfo
              recipe={ {
                ...recipe,
                ingredients: inProgress[type][id],
              } }
              handleChange={ handleIngredientCheck }
              checkedIngredients={ inProgress[id] }
            />
            <button
              data-testid="finish-recipe-btn"
              type="button"
              disabled={ isButtonDisabled }
              onClick={ handleDoneRecipe }
            >
              Finalizar
            </button>

          </div>
        ) }
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecipeInProgress;
