import React, { useEffect } from 'react';

// internal
// css
import { SearchStyled } from './styles/Search.styled.js';
// components

function Search() {
  return (
    <SearchStyled className='search'>
      <form
        action='https://www.google.com/search'
        className='searchform'
        method='get'
        name='searchform'
      >
        <div className='form__group'>
          <input
            autoFocus
            autoComplete='off'
            className='form-control form__field'
            name='q'
            placeholder='Search the Internet'
            required='required'
            type='text'
          />
          {/* <button type='submit' className='search-button'>
            Search
          </button> */}
          <label htmlFor='name' className='form__label'>
            Search the Internet
          </label>
        </div>
      </form>
    </SearchStyled>
  );
}

export default Search;
