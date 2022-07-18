import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import getIngredientAndMeasureList from '../../helpers/getIngredientAndMeasureList';
import getRecipeAPI from '../../services/getRecipeAPI';
import getRecomendationApi from '../../services/getRecomendationsAPi';
import BasicCard from '../../components/BasicCard/BasicCard';
import './RecipeDetails.css';
import useLocalStorage from '../../hooks/useLocalStorage';
import FavoriteButton from '../../components/FavoriteButton';
import ShareButton from '../../components/ShareButton';

function RecipeDetails({ match: { params: { id }, path }, history }) {
  const [recipe, setRecipe] = useState();
  const [basicCards, setBasicCards] = useState();
  const [inProgress] = useLocalStorage('inProgressRecipes', {});
  const [isDone] = useLocalStorage('doneRecipes', []);

  useEffect(() => {
    const getRecipe = async () => {
      const type = path.includes('foods') ? 'meal' : 'cocktail';

      const recipeObj = await getRecipeAPI(type, id);
      const ingredients = getIngredientAndMeasureList(recipeObj);

      const strType = path.includes('foods') ? 'Meal' : 'Drink';
      const strCategory = path.includes('foods') ? 'Category' : 'Alcoholic';
      const {
        [`str${strType}`]: title,
        [`str${strType}Thumb`]: img,
        strInstructions: instructions,
        [`str${strCategory}`]: category,
        strYoutube: video,
        [`id${strType}`]: idRecipe,
      } = recipeObj;

      setRecipe({
        ...recipeObj,
        isDetails: true,
        isFood: path.includes('foods'),
        title,
        img,
        category,
        instructions,
        video,
        ingredients,
        idRecipe,
      });
    };
    getRecipe();
  }, []);

  useEffect(() => {
    const getRecomendation = async () => {
      const type = path.includes('foods') ? 'cocktail' : 'meal';
      const result = path.includes('foods') ? 'drinks' : 'meals';
      const recomendation = await getRecomendationApi(type, result);
      setBasicCards(recomendation);
    };
    getRecomendation();
  }, []);

  const isRecipeDone = () => {
    const type = path.includes('foods') ? 'meals' : 'cocktails';
    if (inProgress[type]?.[id]) return 'inProgress';
    if (isDone.find((recipeDone) => recipeDone.id === id)) {
      return 'done';
    }
    return 'new';
  };

  return (
    <section>
      {!recipe ? null : (
        <div>
          <RecipeInfo recipe={ recipe } />
          <FavoriteButton
            info={ recipe }
          />
          <ShareButton />
        </div>
      )}
      <div className="recomendation">
        {basicCards && basicCards.map((basicCard, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recomendation-card` }
            className="recomendation-card"
          >
            <BasicCard
              className="recomendation-card-item"
              pathname={ path.includes('foods') ? 'Drinks' : '/foods' }
              index={ index }
              { ...basicCard }
              dataTitle={ `${index}-recomendation-title` }
            />
          </div>
        ))}
      </div>
      {(isRecipeDone() === 'done') ? null : (
        <div className="start-recipe-btn">
          <button
            type="button"
            className="start-recipe-btn"
            data-testid="start-recipe-btn"
            onClick={ () => history.push(`/${path
              .includes('food') ? 'foods' : 'drinks'}/${id}/in-progress`) }
          >
            { isRecipeDone() === 'inProgress' ? 'Continue Recipe' : 'Start Recipe'}
          </button>
        </div>) }
    </section>
  );
}

RecipeDetails.propTypes = {
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

export default RecipeDetails;
