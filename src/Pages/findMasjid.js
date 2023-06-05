import {useEffect, useState} from 'react'
import Nav from '../components/Nav.js';
import PublicViewingMajids from '../components/PublicViewingMajids.js';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function findMasjid() {

  return (
    <div className='website'>
      {/* <Nav /> */}
      <h1>Find A Masjid</h1>

      <div className='home'>
            <div className='workouts'>
      <PublicViewingMajids/>
      </div>
      </div>
    </div>
  )
}

export default findMasjid