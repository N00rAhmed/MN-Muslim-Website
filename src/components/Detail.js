import React from 'react';
import Nav from '../components/Nav.js';
import { useLocation } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const title = params.get('title');
  const description = params.get('description');
  const address = params.get('address');
  const number = params.get('number');
  const services = params.get('services');
  const links = params.get('links');
  const workingHours = params.get('workingHours');
  const createdAt = params.get('createdAt');

  return (
    <div>
      <Nav />
      <h1>Detail Page</h1>

      <p>
        <strong>Title: </strong>
        {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <p>
        <strong>Address: </strong>
        {address}
      </p>
      <p>
        <strong>Phone number: </strong>
        {number}
      </p>
      {/* Render other post details */}
    </div>
  );
}

export default Detail;
