import React from 'react'
import Nav from '../components/Nav.js';
import { useLocation } from 'react-router-dom';

function DetailMasjid() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const Name = params.get('Name');
    const address = params.get('address');
    const number = params.get('number');
  
    return (
    <div>
      {/* <Nav /> */}
      <h1>Detail Page</h1>

      <p>
        <h4>{Name}</h4>
      </p>
      <p>
        {address}
      </p>

      {/* Render other post details */}

    </div>
  )
}

export default DetailMasjid