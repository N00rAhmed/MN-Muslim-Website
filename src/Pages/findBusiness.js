import React, { useEffect, useState } from 'react';
import { UseBusinessesContext } from '../hooks/UseBusinessesContext';
import { useNavigate } from 'react-router-dom';
// components
import BusinessDetails from '../components/BusinessDetails'
import BusinessForm from '../components/BusinessForm.js';
import Nav from '../components/Nav';
import PublicViewingDetails from '../components/PublicViewingDetails';
// import '../styles/admin.css';

function FindBusiness() {
  const { businesses, dispatch } = UseBusinessesContext();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBusinesses = async () => {
      const response = await fetch('https://mnmuslims-api.onrender.com/api/businesses/');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_BUSINESSES', payload: json });
      }
      setLoading(false); // Set loading to false when data is fetched
    };

    fetchBusinesses();
  }, []);

  const handlePostClick = (business) => {
    navigate(`/detail?title=${encodeURIComponent(business.title)}&description=${encodeURIComponent(
      business.description,
    )}&address=${encodeURIComponent(business.address)}&number=${encodeURIComponent(
      business.number,
    )}&services=${encodeURIComponent(business.services)}&links=${encodeURIComponent(
      business.links,
    )}&workingHours=${encodeURIComponent(business.workingHours)}&createdAt=${encodeURIComponent(
      business.createdAt,
    )}`);
  };

  return (
    <div className='website'>
      {/* <Nav /> */}
      <h1>Find A Business</h1>
      {loading ? ( // Display loading text when loading is true
        <div>Loading...</div>
      ) : (
        <div className='home'>
          <div className='workouts'>
            {businesses &&
              businesses.map((business) => (
                <PublicViewingDetails key={business._id} business={business} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FindBusiness;
