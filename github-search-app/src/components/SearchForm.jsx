import React, { useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function SearchForm() {
  const { searchType, setSearchType, setSearchTerm, handleSearch } = useContext(SearchContext);
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(term);
    handleSearch(searchType, term);
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        value={term}
        //onChange={(e) => setSearchTerm(e.target.value)}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="search github"
      />
      <div>
        <label>
          <input 
            type="radio" 
            value="users" 
            checked={searchType === 'users'}
            onChange={() => setSearchType('users')}
          />
          Users
        </label>
        <label>
          <input 
            type="radio" 
            value="orgs" 
            checked={searchType === 'orgs'}
            onChange={() => setSearchType('orgs')}
          />
          Organizations
        </label>
      </div>
      <button className='btn' disabled={!term} type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
