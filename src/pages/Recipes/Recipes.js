import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchRecipes from '../../services/api';
import BasicCard from '../../components/BasicCard/BasicCard';

function Recipes({ location: { pathname } }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const db = pathname === '/foods' ? 'meal' : 'cocktail';
      const response = await fetchRecipes(db, '');
      setRecipes(response);
    };
    getRecipes();
  }, [pathname]);

  return (
    <div>
      { recipes.length > 0 && recipes.map((recipe, i) => (
        <BasicCard
          { ...recipe }
          index={ i }
          pathname={ pathname }
          key={ i }
        />
      ))}
    </div>
  );
}

Recipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipes;
