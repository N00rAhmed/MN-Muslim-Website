import React from 'react'
import { useEffect } from 'react';
import { UseBusinessesContext } from '../hooks/UseBusinessesContext';
import { useNavigate } from 'react-router-dom';
// components
import BusinessDetails from '../components/BusinessDetails'
import BusinessForm from '../components/BusinessForm.js';
import Nav from '../components/Nav';
import PublicViewingDetails from '../components/PublicViewingDetails';
// import '../styles/admin.css';

function FindBusiness() {

  const {businesses, dispatch} = UseBusinessesContext()

  useEffect(() => {
      const fetchBusinesses = async () => {
          const response = await fetch('/api/businesses')
          const json = await response.json()

          if (response.ok) {
              dispatch({type: 'SET_BUSINESSES', payload: json})
          }
      }
      fetchBusinesses()
  }, [])


  return (
    <div>
      <Nav />
      <h1>findBusiness</h1>
      <div className='home'>
            <div className='workouts'>
                {businesses && businesses.map((business) => (
                    <PublicViewingDetails key={business._id} business={business}/>
                ))}
            </div>
        </div>

    </div>
  );
}

export default FindBusiness;
