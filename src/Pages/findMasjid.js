import {useEffect, useState} from 'react'
import Nav from '../components/Nav.js';
import PublicViewingMajids from '../components/PublicViewingMajids.js';

function findMasjid() {

 


  return (
    <div>
      {/* <Nav /> */}
      <h1>findMasjid</h1>

      <div className='home'>
            <div className='workouts'>
      <PublicViewingMajids/>
      </div>
      </div>
    </div>
  )
}

export default findMasjid