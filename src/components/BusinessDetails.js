import { useState, useEffect } from 'react';
import { UseBusinessesContext } from '../hooks/UseBusinessesContext';
import BusinessPage from '../Pages/findBusiness';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const BusinessDetails = ({ business }) => {
  const { dispatch } = UseBusinessesContext();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/businesses/' + business._id, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_BUSINESS', payload: json });
    }
  };

  
  const handlePostClick = () => {
    navigate(`/detail?title=${encodeURIComponent(business.title)}&description=${encodeURIComponent(business.description)}&address=${encodeURIComponent(business.address)}&number=${encodeURIComponent(business.number)}&services=${encodeURIComponent(business.services)}&links=${encodeURIComponent(business.links)}&email=${encodeURIComponent(business.email)}&workingHours=${encodeURIComponent(business.workingHours)}&createdAt=${encodeURIComponent(business.createdAt)}`);
  };

  return (
    <div className="workout-details">

      <h4>{business.title}</h4>
      <p>
        <strong>description: </strong>
        {business.description}
      </p>
      <p>
        <strong>address: </strong>
        {business.address}
      </p>
      <p>
        <strong>phone number: </strong>
        {business.number}
      </p>
      <p>
        <strong>services: </strong>
        {business.services}
      </p>
      <p>
        <strong>links: </strong>
        <a href={business.links}>{business.links}</a>
      </p>
      <p>
        <strong>email: </strong>
        {business.email}
      </p>
{/* email */}

      <p>
        <strong>working hours: </strong>
        {business.workingHours}
      </p>
      <p>{business.createdAt}</p>

      <span onClick={handleClick}>delete</span>

      <button onClick={handlePostClick}>detail</button>
      
      {/* <button onClick={POST}>post</button> */}

    </div>
  );
};

export default BusinessDetails;
