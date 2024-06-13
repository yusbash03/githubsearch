import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import {BallTriangle} from 'react-loader-spinner'

function LoadingSpinner() {
  const { loading } = useContext(SearchContext);
  return loading ? 
  (
    <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  ) : null;
}

export default LoadingSpinner;
