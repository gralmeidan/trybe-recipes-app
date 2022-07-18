import React, { useContext } from 'react';
import DetailedCard from '../../components/DetailedCard/DetailedCard';
import Header from '../../components/Header/Header';
import Context from '../../context/Context';

function FavoriteRecipes() {
  const headerTitle = 'Favorite Recipes';

  const { favorites } = useContext(Context);
  console.log(favorites);

  return (
    <>
      <Header title={ headerTitle } />
      <main id="favoriterecipes-page">
        {favorites.map((obj, i) => (
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
