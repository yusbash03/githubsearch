import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { Link } from 'react-router-dom';
import Result from './Result';


function SearchResults() {
  const { results, searchTerm, loading, error } = useContext(SearchContext);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <p className="error">{error}</p>;
  if (results.length === 0 && searchTerm) return <p>No results found.</p>;

  return (
    <>
      <div style={{fontWeight: 'bold', marginBottom: 10}}>{results.length} Item(s) found</div>

    <div className="results">
      
      {results.map(result => (
        <Link key={result.id} to={`/details/${result.login}`} className="result-item">
         
         <Result avatar={result.avatar_url} name={result.login}/>
        </Link>
      ))}
      {loading && <p style={{color: 'limegreen'}}>Loading...</p>}
      {error && <p className="error">{error}</p>}
    </div>
    </>
   
  );
}

export default SearchResults;
