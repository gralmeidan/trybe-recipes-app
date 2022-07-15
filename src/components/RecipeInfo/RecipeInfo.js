// import React from 'react';
// //

// function RecipeInfo({ recipe }) {
//   const { isFood, photo, title, category, ingredients, video } = recipe;
//   return (
//     <div className="recipeInfos">
//       <img src={ photo } alt="recipePhoto" data-testid="recipe-photo" />
//       <h2 data-testid="recipe-title">
//         {title}
//       </h2>
//       {food ? (
//         <span data-testid="recipe-category">
//           {category}
//         </span>) : null}
//       {ingredients.map((ingredient, index) => (
//         <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
//           {ingredient}
//         </p>))}
//       <p data-testid="instructions">{instructions}</p>
//       {isFood ? (
//         <video src={ video } controls>
//           <track
//             default
//             kind="captions"
//             srcLang="en"
//             src="/media/examples/friday.vtt"
//           />
//         </video>) : null}
//       <div data-testid={ `${index}-recomendation-card` }>{card}</div>

//     </div>
//   );
// }

// export default RecipeInfo;
