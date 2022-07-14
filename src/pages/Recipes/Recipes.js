import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchRecipes from '../../services/api';

function Recipes({ location: { pathname } }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const db = pathname === '/foods' ? 'meal' : 'cocktail';
      console.log(db);
      const response = await fetchRecipes(db, '');
      setRecipes(response);
    };
    getRecipes();
  }, [pathname]);

  return (
    <div>
      Recipes
      {' '}
      { pathname }
    </div>
  );
}

Recipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipes;
