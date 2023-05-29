import {useEffect, useState} from 'react'
import Nav from '../components/Nav.js';
import '../styles/directory.css';
import Footer from '../components/Footer'
import SearchFilter from '../components/SearchBusiness.js';
import '../styles/admin.css';
import { UseBusinessesContext } from '../hooks/UseBusinessesContext';
import MasjidSearchFilter from '../components/MasjidSearchFilter.js';

function Directory() {
  const {businesses, dispatch} = UseBusinessesContext()

  useEffect(() => {
      const fetchBusinesses = async () => {
          const response = await fetch('https://mnmuslims-api.onrender.com/api/businesses/')
          const json = await response.json()

          if (response.ok) {
              dispatch({type: 'SET_BUSINESSES', payload: json})
          }
      }
      fetchBusinesses()
  }, [])

  return (
    <div>
      {/* <Nav/> */}
      <h1>Directory</h1>
      <p>This is the directory page.</p>
      <div className='links'>
        <a href='/findMasjid'><p>All Masjids</p></a>
        <a href='/findBusiness'><p>All Businesses</p></a>
        {/* <p href="/findMasjid">Find Masjid</p> */}
        <SearchFilter/>
        <MasjidSearchFilter/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Directory