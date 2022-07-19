import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import DetailedCard from '../../components/DetailedCard/DetailedCard';
import useLocalStorage from '../../hooks/useLocalStorage';

function DoneRecipes() {
  // Título apenas para teste
  const headerTitle = 'Done Recipes';
  const [filter, setFilter] = useState('');
  const [isDone] = useLocalStorage('doneRecipes', []);

  const options = [
    { name: 'all', value: '' },
    { name: 'food', value: 'food' },
    { name: 'drink', value: 'drink' },
  ];

  const display = isDone?.length ? isDone
    .filter(({ type }) => type.includes(filter)) : false;

  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      <Header title={ headerTitle } />
      <main id="donerecipes-page">
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
          {display?.length && display.map((obj, i) => (
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

export default DoneRecipes;
