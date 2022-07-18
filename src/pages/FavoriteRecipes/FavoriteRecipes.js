import React from 'react';
import DetailedCard from '../../components/DetailedCard/DetailedCard';
import Header from '../../components/Header/Header';

function FavoriteRecipes() {
  // Título apenas para teste
  const headerTitle = 'Favorite Recipes';

  const Recipes = [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    },
  ];

  return (
    <>
      <Header title={ headerTitle } />
      <main id="favoriterecipes-page">
        {Recipes.map((obj, i) => (
          <DetailedCard
            { ...obj }
            index={ i }
            key={ i }
          />
        ))}
      </main>
    </>
  );
}

export default FavoriteRecipes;
