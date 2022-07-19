import React from 'react';
import Header from '../../components/Header/Header';

function DoneRecipes() {
  // Título apenas para teste
  const headerTitle = 'Done Recipes';

  return (
    <>
      <Header title={ headerTitle } />
      <main id="donerecipes-page">
        <h2>DoneRecipes</h2>
        {/* <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ filte }
        >
          All

        </button> */}
      </main>
    </>
  );
}

export default DoneRecipes;
