import React from 'react';
import Header from '../../components';

function DoneRecipes() {
  // Título apenas para teste
  const headerTitle = 'Done Recipes';

  return (
    <>
      <Header title={ headerTitle } />
      <main id="donerecipes-page">
        <h2>DoneRecipes</h2>
      </main>
    </>
  );
}

export default DoneRecipes;
