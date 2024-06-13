import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailsPage.css';
import { BASEURL } from '../../endpoints';
import {BallTriangle} from 'react-loader-spinner'
import { SearchContext } from '../../context/SearchContext';

function DetailsPage() {
  const { username } = useParams();
  const [details, setDetails] = useState(null);
  const { loading, setLoadingState } = useContext(SearchContext);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoadingState(true);
      try {
        const response = await axios.get(`${BASEURL}/users/${username}`);
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching user/org details:', error);
        <p className="error">Error fetching user/org details, {error}</p>
      }
      finally{
        setLoadingState(false);
      }
    };

    fetchDetails();
  }, [username, setLoadingState]);

  if (loading) {
    return <div className="spinner"><BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#4fa94d"
    ariaLabel="ball-triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    /></div>;
  }
  if (!details) {
    return <div className="spinner">  
    Loading...
   </div>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-header">
        <Link to="/" className="back-button">Back</Link>
          <h2>{details.name}</h2>
        </div>
        <div className="details-content">
          <img 
            src={details.avatar_url} 
            alt={details.login} 
            className="avatar" 
          />
          <div style={{textAlign: 'left'}}>
          <div className='info-item'>
            <p className='para'>Email: </p> {details.company ? details.email : 'N/A'}
            </div>
            <div className='info-item'>
            <p className='para'>Number of followers:</p> {details.followers}
            </div>
            <div className='info-item'>
            <p className='para'>Number of public repositories:</p> {details.public_repos}
            </div>
            <div className='info-item'>
            <p className='para'>Twitter(X) username: </p> {details.twitter_username ? details.twitter_username : 'N/A'}
            </div>
            <div className='info-item'>
            <p className='para'>Company name: </p> {details.company ? details.company : 'N/A'}
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
