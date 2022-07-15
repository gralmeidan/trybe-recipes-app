import React, { useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (value) => {
    setSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="search">
      <form onSubmit={ (e) => handleSubmit(e) }>
        <input
          type="text"
          name="search-input"
          id="search-input"
          value={ searchValue }
          onChange={ ({ target: { value } }) => handleChange(value) }
          data-testid="search-input"
        />
      </form>
    </div>
  );
};

export default SearchBar;
