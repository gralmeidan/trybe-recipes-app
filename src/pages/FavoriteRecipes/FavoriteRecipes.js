import React, { useContext, useState } from 'react';
import DetailedCard from '../../components/DetailedCard/DetailedCard';
import Header from '../../components/Header/Header';
import Context from '../../context/Context';

function FavoriteRecipes() {
  const headerTitle = 'Favorite Recipes';
  const [filter, setFilter] = useState('');
  const { favorites } = useContext(Context);

  const options = [
    { name: 'all', value: '' },
    { name: 'food', value: 'food' },
    { name: 'drink', value: 'drink' },
  ];

  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const display = favorites.filter(({ type }) => type.includes(filter));

  return (
    <>
      <Header title={ headerTitle } />
      <main id="favoriterecipes-page">
        <form>
          {options.map(({ name, value }) => (
            <label
              key={ name }
              data-testid={ `filter-by-${name}-btn` }
              htmlFor={ `filter-by-${name}-btn` }
            >
              <input
                id={ `filter-by-${name}-btn` }
                type="radio"
                name="filter"
                checked={ filter === value }
                value={ value }
                onChange={ handleChange }
              />
              {name}
            </label>
          ))}
        </form>
        <section>
          {display.map((obj, i) => (
            <DetailedCard
              { ...obj }
              index={ i }
              key={ i }
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default FavoriteRecipes;
