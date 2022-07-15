import React from 'react';
import Header from '../../components';

function Recipes() {
  // Título apenas para teste
  const headerTitle = 'Food/Drinks Recipes';

  return (
    <>
      <Header title={ headerTitle } />
      <main id="recipes-page">
        <h2>Recipes</h2>
      </main>
    </>

  );
}

export default Recipes;
