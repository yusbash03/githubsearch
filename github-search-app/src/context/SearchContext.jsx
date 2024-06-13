import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../endpoints';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const nav = useNavigate();
  const { type, term } = useParams();

  const [searchType, setSearchType] = useState(type || 'users');
  const [searchTerm, setSearchTerm] = useState(term || '');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (term) {
      handleSearch(type, term);
    }
  }, [type, term]);

  const handleSearch = async (type, term) => {
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const response = await axios.get(`${BASEURL}/search/users`, {
        params: { q: term, type: type === 'orgs' ? 'Organization' : 'User' }
      });
      

      setResults(response.data.items);
      nav(`/search/${type}/${term}`);
    } catch (err) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const setLoadingState = (state) => {
    setLoading(state);
  };

  return (
    <SearchContext.Provider value={{
      searchType,
      setSearchType,
      searchTerm,
      setSearchTerm,
      results,
      loading,
      error,
      handleSearch,
      setLoadingState
    }}>
      {children}
    </SearchContext.Provider>
  );
};
