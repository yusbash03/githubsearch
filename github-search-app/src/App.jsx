import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';
import DetailsPage from './pages/Details/DetailsPage';

function App() {
  return (
    <div className="App">
      <h1>Search on Git</h1>
      <Routes>
        <Route path="/search/:type/:term?" element={<SearchPage/>} />
        <Route path="/details/:username" element={<DetailsPage/>} />
        <Route path="/" element={<SearchPage/>} />
      </Routes>
    </div>
  );
}

const SearchPage = () => (
  <>
    <SearchForm />
    <LoadingSpinner />
    <SearchResults />
  </>
);

export default App;
