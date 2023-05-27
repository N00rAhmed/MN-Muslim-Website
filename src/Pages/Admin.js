import React from 'react'
import { useEffect } from 'react';
import { UseBusinessesContext } from '../hooks/UseBusinessesContext';
import { useNavigate } from 'react-router-dom';

// components
import BusinessDetails from '../components/BusinessDetails'
import BusinessForm from '../components/BusinessForm.js';

import '../styles/admin.css';
import Nav from '../components/Nav';
function Admin() {
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
        <Nav/>
        <h2>Admin Page</h2>

        <div className='home'>
            <div className='workouts'>
                {businesses && businesses.map((business) => (
                    <BusinessDetails key={business._id} business={business}/>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Admin