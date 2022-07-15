import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import getIngredientAndMeasureList from '../../helpers/getIngredientAndMeasureList';
import getRecipeAPI from '../../services/getRecipeAPI';
import getRecomendationApi from '../../services/getRecomendationsAPi';
import BasicCard from '../../components/BasicCard/BasicCard';

function RecipeDetails({ match: { params: { id }, path } }) {
  const [recipe, setRecipe] = useState();
  const [basicCards, setBasicCards] = useState();

  useEffect(() => {
    const getRecipe = async () => {
      const type = path.includes('foods') ? 'meal' : 'cocktail';
      const result = path.includes('foods') ? 'meals' : 'drinks';

      const recipeObj = await getRecipeAPI(type, id, result);
      const ingredients = getIngredientAndMeasureList(recipeObj);

      const strType = path.includes('foods') ? 'Meal' : 'Drink';
      const strCategory = path.includes('foods') ? 'Category' : 'Alcoholic';
      const {
        [`str${strType}`]: title,
        [`str${strType}Thumb`]: img,
        strInstructions: instructions,
        [`str${strCategory}`]: category,
        strYoutube: video,
      } = recipeObj;

      setRecipe({
        isDetails: true,
        isFood: path.includes('foods'),
        title,
        img,
        category,
        instructions,
        video,
        ingredients });
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

  return (
    <section>
      {recipe && <RecipeInfo recipe={ recipe } />}
      <div>
        {basicCards && basicCards.map((basicCard, index) => (
          <div key={ index } data-testid={ `${index}-recomendation-card` }>
            <BasicCard
              pathname={ path }
              index={ index }
              { ...basicCard }
            />
          </div>
        ))}
      </div>
      {/* {isDone ? (
        <div className="start-recipe-btn">
          <button
            type="button"
            data-testid="start-recipe-btn"
          >
            Start Recipe
          </button>
        </div>) : null } */}
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
