import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components';

function Recipes() {
  // Título apenas para teste
  const location = useLocation();
  let headerTitle;
  if (location.pathname === '/foods') headerTitle = 'Foods';
  if (location.pathname === '/drinks') headerTitle = 'Drinks';

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
