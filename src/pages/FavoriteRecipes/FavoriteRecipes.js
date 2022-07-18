import React from 'react';
import Header from '../../components/Header/Header';

function FavoriteRecipes() {
  // Título apenas para teste
  const headerTitle = 'Favorite Recipes';

  return (
    <>
      <Header title={ headerTitle } />
      <main id="favoriterecipes-page">
        <h2>FavoriteRecipes</h2>
      </main>
    </>
  );
}

export default FavoriteRecipes;
