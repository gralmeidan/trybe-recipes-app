import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import SearchOptions from './SearchOptions';

const SearchBar = () => {
  const { handleSearch, search } = useContext(Context);

  const [searchValue, setSearchValue] = useState(search.value);
  const [searchRadio, setSearchRadio] = useState(search.option);

  const handleChange = (evt) => {
    const { target } = evt;

    if (target.type === 'radio') setSearchRadio(target.value);
    if (target.type === 'text') setSearchValue(target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (searchValue.length > 1 && searchRadio === 'first-letter') {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const searchObj = {
        option: searchRadio,
        value: searchValue,
      };
      handleSearch(searchObj);
    }
  };

  return (
    <div id="search">
      <form onSubmit={ handleSubmit }>
        <div>
          <input
            type="text"
            id="search-input"
            name="search-input"
            value={ searchValue }
            onChange={ handleChange }
            data-testid="search-input"
          />
        </div>
        <SearchOptions option={ searchRadio } handleChange={ handleChange } />
        <div>
          <button
            type="submit"
            id="exec-search-btn"
            name="exec-search-btn"
            data-testid="exec-search-btn"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
