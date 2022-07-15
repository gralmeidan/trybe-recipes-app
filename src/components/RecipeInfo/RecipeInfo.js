import React from 'react';
import PropTypes from 'prop-types';

function RecipeInfo({ recipe, handleChange }) {
  const { isDetails, isFood, img,
    title, category, instructions, ingredients, video } = recipe;
  return (
    <div className="recipeInfos">
      <img src={ img } alt="recipePhoto" data-testid="recipe-photo" />
      <h2 data-testid="recipe-title">
        {title}
      </h2>
      <span data-testid="recipe-category">
        {category}
      </span>

      {isDetails ? (
        ingredients.map((ingredient, index) => (
          <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${ingredient.measure} ${ingredient.ingredient}`}
          </p>))) : (
        ingredients.map((ingredient, index) => (
          <label
            key={ index }
            htmlFor={ ingredient.ingredient }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              type="checkbox"
              id={ ingredient.ingredient }
              value={ ingredient.ingredient }
              name="ingredientStep"
              onChange={ handleChange }
              checked={ ingredient.checked }
            />
            {`${ingredient.measure} ${ingredient.ingredient}`}
          </label>
        )))}

      <p data-testid="instructions">{instructions}</p>
      {isFood ? (
        <video
          src={ video }
          data-testid="video"
          controls
        >
          <track
            default
            kind="captions"
            srcLang="en"
            src="/media/examples/friday.vtt"
          />
        </video>) : null}
    </div>
  );
}

RecipeInfo.propTypes = {
  recipe: PropTypes.shape({
    isDetails: PropTypes.bool.isRequired,
    isFood: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.object),
    video: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func,
};

RecipeInfo.defaultProps = {
  handleChange: () => {},
};

export default RecipeInfo;
