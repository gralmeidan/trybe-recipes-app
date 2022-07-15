import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchRecipes, { fetchCategories } from '../../services/api';
import BasicCard from '../../components/BasicCard/BasicCard';

function Recipes({ location: { pathname } }) {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const db = pathname === '/foods' ? 'meal' : 'cocktail';
      let response = await fetchRecipes(db);
      setRecipes(response);
      response = await fetchCategories(db);
      setCategories(response);
    };
    getRecipes();
  }, [pathname]);

  return (
    <div>
      { categories?.length > 0 && categories.map(({ strCategory }, i) => (
        <label
          key={ i }
          htmlFor={ `${strCategory}-category-filter` }
          data-testid={ `${strCategory}-category-filter` }
        >
          {strCategory}
          <input
            type="radio"
            name="category"
            id={ `${strCategory}-category-filter` }
          />
        </label>
      ))}
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
